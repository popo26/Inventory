let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js


router.get("/", (req, res) => {
  Controllers.customerController.getCustomers(res);
});

router.get("/:id", (req, res) => {
  Controllers.customerController.getProductFromCustomer(req, res);
});

router.post("/create", (req, res) => {
  Controllers.customerController.createCustomer(req.body, res);
});

// router.get("/", (req, res) => {
//   Controllers.productController.getProducts(req, res);
// });

// router.get("/search/:id", (req, res) => {
//   Controllers.productController.getProductByID(req, res);
// });

// router.get("/search", (req, res) => {
//   Controllers.productController.getProductByName(req, res);
// });

// router.post("/create", (req, res) => {
//   Controllers.productController.postProduct(req.body, res);
// });

// router.put("/update/:id", (req, res) => {
//   Controllers.productController.updateProduct(req, res);
// });

// router.delete("/delete/:id", (req, res) => {
//   Controllers.productController.deleteProduct(req, res);
// });

module.exports = router;
