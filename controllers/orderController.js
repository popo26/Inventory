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
      data: `This order ${req.params.id} is for ${customer.firstName} ${customer.lastName}`,
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

const getProductsPerOrder = async (req, res) => {
  const customerId = req.params.customerId;
  const orderId = req.params.orderId;

  try {
    // Fetch products associated with the order and customer
    const products = await Models.Order.findOne({
      where: { id: orderId, customerId: customerId },
      include: [{ model: Models.Product }],
    });

    if (!products) {
      return res
        .status(404)
        .json({ message: "Order not found for the customer" });
    }

    res.status(200).json(products.products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get Order ID from Customer First Name
const getOrderIDsFromCustomerFirstName = async (req, res) => {
  const customerFirstName = req.params.firstName;
  console.log("customer first name", customerFirstName);

  try {
    // Find the customer based on the first name(case insensitive, exact match)
    const customer = await Models.Customer.findOne({
      where: { firstName: customerFirstName },
      include: [{ model: Models.Order }],
    });

    if (!customer) {
      res.send({ result: `No customer with ${customerFirstName} found` });
    }

    //Many-to-One relationship between Customer & Order allow this use "customer.orders"
    let existingOrders = [];
    if (customer.orders.length > 0) {
      for (let order of customer.orders) {
        existingOrders.push(order["dataValues"].id);
      }
      res.send({
        result: `Existing Orders for ${customerFirstName} are Order# ${existingOrders}`,
      });
    } else {
      res.send({ result: `No order found for ${customerFirstName}` });
    }
  } catch (error) {
    console.error("Error finding Order ID by customer first name:", error);
    throw error;
  }
};

const addProductToOrder = async (req, res) => {
  const orderId = req.params.orderId;
  const productId = req.params.productId;


  try {
    const order = await Models.Order.findByPk(orderId);

    if (!order) {
      res.send({ success: false, result: "Order ID not found" });
    }

    const product = await Models.Product.findByPk(productId);

    if (!product) {
      res.send({ success: false, result: "Product ID not found" });
    }

    //Associate the product with the order.
    //Many-to-Many relationship between Order & Product through
    //"order_product" generates "addProduct" method.
    await order.addProduct(product);

    res.send({
      success: true,
      result: `Product ID ${productId} added to the order ${orderId}`,
    });
  } catch (error) {
    console.error("Error adding product to order:", error);
    res.send({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getOrders,
  getCustomerNameFromOrderNumber,
  createOrder,
  deleteOrder,
  getProductsPerOrder,
  getOrderIDsFromCustomerFirstName,
  addProductToOrder,
};
