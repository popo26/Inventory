let dbConnect = require("../database/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const Order = require("./order")
const Product = require("./product")
//const Order = require("./order")



const Order_Product  = sequelizeInstance.define("order_product", {}, { timestamps: false });
// Define associations
Order.belongsToMany(Product, { through: Order_Product });
Product.belongsToMany(Order, { through: Order_Product });


module.exports = Order_Product;