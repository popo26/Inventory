const express = require("express");
require("dotenv").config();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
const app = express();

app.use(cors());

// parse requests of content-type -application / json;
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Inventory application.",
  });
});

let productRoutes = require("./routes/productRoutes");
let customerRoutes = require("./routes/customerRoutes");
let orderRoutes = require("./routes/orderRoutes");

app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
