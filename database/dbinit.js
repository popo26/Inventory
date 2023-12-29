"use strict";
const dbConnect = require("./dbConnect");
const Models = require("../models");
//const moment = require("moment");
const fs = require("fs-extra");
const sequelize = dbConnect.Sequelize;

const initDb = async () => {
  await _populateProductTable();
  await _populateCustomerTable();
};

/**
 *  Populate the product table with 10 users taken from a random user API
 */
const _populateProductTable = async () => {
  // Check if student table is empty
  Models.Product.count().then((result) => {
    // Only populate the table if empty
    if (result === 0) {
      fetch("https://dummyjson.com/products")
        // fetch("https://randomuser.me/api/?results=10&inc=name,dob&nat=au,nz,fr")
        .then((response) => response.json())
        .then((data) => {
          // Extract data from the API and only save what I am interested in

          let productDataToInsert = new Array();
          data.results.forEach((item) => {
            productDataToInsert.push({
              title: item.title,
              description: item.description,
              price: item.price,
              stock: item.stock,
              category: item.category,
            });
          });

          Models.Product.bulkCreate(productDataToInsert);
          // Here I need to populate the Student_Cohort after Student and Cohort have been populated.
          // _populateStudentCohortsTable();
        });
    }
  });
};

/**
 *  Populate the student table with 10 users taken from a random user API
 */
const _populateCustomerTable = async () => {
  // Check if student table is empty
  Models.Customer.count().then((result) => {
    // Only populate the table if empty
    if (result === 0) {
      fetch("https://randomuser.me/api/?results=10&inc=name,dob&nat=au,nz,fr")
        .then((response) => response.json())
        .then((data) => {
          // Extract data from the API and only save what I am interested in
          let customersDataToInsert = new Array();
          data.results.forEach((person) => {
            customersDataToInsert.push({
              firstName: person.name.first,
              lastName: person.name.last,
            });
          });

          Models.Customer.bulkCreate(customersDataToInsert);
          // Here I need to populate the Student_Cohort after Student and Cohort have been populated.
          _populateCustomerProductTable();
        });
    }
  });
};

const _populateCustomerProductTable = async () => {
  Models.Customer_Product.count().then((result) => {
    // Only populate the table if empty
    if (result === 0) {
      const sql_string = fs.readFileSync(
        "./database/customer_products.sql",
        "utf8"
      );
      sequelize.query(sql_string).then(([results, metadata]) => {
        // Results will be an empty array and metadata will contain the number of affected rows.
        console.log("results = ", results);
      });
    }
  });
};

module.exports = { initDb };
