"use strict";
const Models = require("../models");
let dbConnect = require("../database/dbConnect");
const sequelize = dbConnect.Sequelize;
const { QueryTypes } = require("sequelize");

const getCustomers = (res) => {
  Models.Customer.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getProductFromCustomer = (req, res) => {
  sequelize
    .query(
      `SELECT * FROM cohorts INNER JOIN student_cohorts
       ON student_cohorts.cohortId = cohorts.id WHERE student_cohorts.studentId = ` +
        req.params.id,
      { type: QueryTypes.SELECT }
    )
    .then((data) => {
      console.log("Raw query = ", data);
      res.json(data);
    });

  /*
  Models.Student.findOne({
    where: {
      id: req.params.id,
    },
    include: Models.Cohort,
  })
    .then(function (data) {
      res.json(data.cohorts);
    })
    .catch((err) => {
      throw err;
    });
    */
};

const createCustomer = (data, res) => {
  Models.Customer.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getCustomers,
  getProductFromCustomer,
  createCustomer,
};
