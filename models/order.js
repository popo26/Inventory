const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../database/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Customer = require("./customer");

class Order extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customers',

        // model: Customer,
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "orders", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);



module.exports = Order;
