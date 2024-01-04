let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.customerController.getCustomers(res);
});

router.get("/:id", (req, res) => {
  Controllers.customerController.getProductsPerCustomer(req, res);
});

router.post("/create", (req, res) => {
  Controllers.customerController.createCustomer(req.body, res);
});

router.get("/search/:id", (req, res) => {
  Controllers.customerController.getCustomerByID(req, res);
});

router.get("/search/firstName/:firstName", (req, res) => {
  Controllers.customerController.getCustomerByFirstName(req, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.customerController.updateCustomer(req, res);
});

router.delete("/delete/:id", (req, res) => {
  Controllers.customerController.deleteCustomer(req, res);
});

module.exports = router;
