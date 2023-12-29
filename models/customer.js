const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../database/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Customer extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "customers", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Customer;
