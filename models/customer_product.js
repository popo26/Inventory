let dbConnect = require("../database/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const Customer = require("./customer");
const Product = require("./product");

const Customer_Product = sequelizeInstance.define(
  "customer_product",
  {},
  { timestamps: false }
);
// Define associations
Customer.belongsToMany(Product, { through: Customer_Product });
Product.belongsToMany(Customer, { through: Customer_Product });

// // Option - associate the User and Post models with the Like model directly
// Like.belongsTo(User);
// Like.belongsTo(Post);

module.exports = Customer_Product;
