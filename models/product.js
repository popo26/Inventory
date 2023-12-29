const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../database/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Product extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      required: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "products", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Product;
