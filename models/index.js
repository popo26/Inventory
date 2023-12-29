"use strict";
const Product = require("./product"); //require the model
const Customer = require("./customer");
const Customer_Product = require("./customer_product");

async function init() {
  await Customer.sync(); //sync the model
  await Product.sync();
  await Customer_Product.sync();
}

init().then(() => {
  const dbInit = require("../database/dbinit");
  dbInit.initDb();
});

module.exports = {
  Product, //export the model
  Customer,
  Customer_Product,
};
