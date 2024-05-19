"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {}
  }
  order.init(
    {
      user_id_order: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "order",
      tableName: "order",
    }
  );
  return order;
};
