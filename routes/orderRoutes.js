let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.orderController.getOrders(res);
});

router.get("/:id", (req, res) => {
  Controllers.orderController.getCustomerNameFromOrderNumber(req, res);
});

router.post("/create", (req, res) => {
  Controllers.orderController.createOrder(req.body, res);
});

module.exports = router;
