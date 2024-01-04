"use strict";
const Models = require("../models");
const Sequelize = require("sequelize");

const getProducts = (res) => {
  Models.Product.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getCustomersPerProduct = (req, res) => {
  Models.Product.findOne({
    where: {
      id: req.params.id,
    },
    include: Models.Customer,
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createProduct = (data, res) => {
  Models.Product.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const getProductByID = (req, res) => {
  const productId = req.params.id;

  Models.Product.findOne({
    where: {
      id: productId,
    },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getProductByCategoryName = async (req, res) => {
  const categoryName = req.params.categoryName;

  console.log("category name", categoryName);
  const Op = Sequelize.Op;
  const operatorsAliases = {
    $like: Op.like,
    $not: Op.not,
  };
  const results = await Models.Product.findAll({
    where: {
      category: { [Op.like]: "%" + categoryName + "%" },
    },
  });

  if (results) {
    res.send({ result: 200, data: results });
    console.log("results", results);
  }
};

const updateProduct = (req, res) => {
  const productId = req.params.id;

  Models.Product.update(req.body, {
    where: {
      id: productId,
    },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteProduct = (req, res) => {
  Models.Product.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getProducts,
  getCustomersPerProduct,
  createProduct,
  getProductByID,
  getProductByCategoryName,
  updateProduct,
  deleteProduct,
};
