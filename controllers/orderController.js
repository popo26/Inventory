"use strict";
const Models = require("../models");

const getOrders = (res) => {
  Models.Order.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Get customer name from Order ID
const getCustomerNameFromOrderNumber = async (req, res) => {
  const order = await Models.Order.findOne({
    where: {
      id: req.params.id,
    },
  });

  const customer = await Models.Customer.findOne({
    where: {
      id: order.customerId,
    },
  });

  if (customer) {
    res.send({
      result: 200,
      data: `This order is for ${customer.firstName} ${customer.lastName}`,
    });
  } else {
    res.send({ result: 500, data: "Error occurred" });
  }
};

const createOrder = (data, res) => {
  Models.Order.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getOrders,
  getCustomerNameFromOrderNumber,
  createOrder,
};
