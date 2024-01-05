"use strict";
const Models = require("../models");
let dbConnect = require("../database/dbConnect");
const sequelize = dbConnect.Sequelize;
const { QueryTypes, Sequelize } = require("sequelize");

const getCustomers = (res) => {
  Models.Customer.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Get products associated to a customer
const getProductsPerCustomer = (req, res) => {
  Models.Customer.findOne({
    where: {
      id: req.params.id,
    },
    include: Models.Product,
  })
    .then(function (data) {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
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

const getCustomerByID = (req, res) => {
  const customerId = req.params.id;

  Models.Customer.findOne({
    where: {
      id: customerId,
    },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getCustomerByFirstName = async (req, res) => {
  const firstName = req.params.firstName;

  console.log("first name", firstName);
  const Op = Sequelize.Op;
  const operatorsAliases = {
    $like: Op.like,
    $not: Op.not,
  };
  const results = await Models.Customer.findAll({
    where: {
      firstName: { [Op.like]: "%" + firstName + "%" },
    },
  });

  if (results) {
    res.send({ result: 200, data: results });
    console.log("results", results);
  }
};

const updateCustomer = (req, res) => {
  const customerId = req.params.id;

  Models.Customer.update(req.body, {
    where: {
      id: customerId,
    },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteCustomer = (req, res) => {
  Models.Customer.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Add a Product to Customer -- at the moment not allowing duplicate
const addProductToCustomer = (req, res) => {
  const { customerId, productId } = req.body;

  Models.Customer_Product.create({
    customerId: customerId,
    productId: productId,
  })
    .then((customerProductInstance) => {
      console.log(
        "Record inserted into customer_product table:",
        customerProductInstance
      );
      res.status(201).json({ success: true, data: customerProductInstance });
    })
    .catch((error) => {
      console.error("Error inserting record", error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    });
};

module.exports = {
  getCustomers,
  getProductsPerCustomer,
  createCustomer,
  getCustomerByID,
  getCustomerByFirstName,
  updateCustomer,
  deleteCustomer,
  addProductToCustomer,
};
