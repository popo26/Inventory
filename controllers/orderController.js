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

const deleteOrder = (req, res) => {
  Models.Order.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getProductsPerOrder = async (req, res)=>{
  const customerId = req.params.customerId;
  const orderId = req.params.orderId;

  try {
    // Fetch products associated with the order and customer
    const products = await Models.Order.findOne({
      where: { id: orderId, customerId: customerId },
      include: [{ model: Models.Product }],
    });

    if (!products) {
      return res.status(404).json({ message: "Order not found for the customer" });
    }

    res.status(200).json(products.products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getOrders,
  getCustomerNameFromOrderNumber,
  createOrder,
  deleteOrder,
  getProductsPerOrder
};
