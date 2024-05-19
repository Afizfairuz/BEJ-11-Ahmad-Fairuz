"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {}
  }
  product.init(
    {
      name_product: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      status: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

    },
    {
      sequelize,
      modelName: "product",
      tableName: "product",
    }
  );
  return product;
};
