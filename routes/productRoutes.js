let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.productController.getProducts(res);
});

router.get("/:id", (req, res) => {
  Controllers.productController.getCustomersPerProduct(req, res);
});

router.post("/create", (req, res) => {
  Controllers.productController.createProduct(req.body, res);
});

router.get("/search/:id", (req, res) => {
  Controllers.productController.getProductByID(req, res);
});

router.get("/search/category/:categoryName", (req, res) => {
  Controllers.productController.getProductByCategoryName(req, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.productController.updateProduct(req, res);
});

router.delete("/delete/:id", (req, res) => {
  Controllers.productController.deleteProduct(req, res);
});

module.exports = router;
