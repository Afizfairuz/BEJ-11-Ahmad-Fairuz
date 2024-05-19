"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    static associate(models) {}
  }
  order_detail.init(
    {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false,
      },
      order_id: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false,
      },
      product_id: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: false,
      }
    },
    {
      sequelize,
      modelName: "order_detail",
      tableName: "order_detail",
    }
  );
  return order_detail;
};
