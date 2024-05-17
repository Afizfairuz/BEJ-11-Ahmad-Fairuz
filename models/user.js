'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      
    }
  }
  User.init({
    full_name:{
      types: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
  },
  email: {
    types: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  address: {
    types: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  phone_number: {
    types: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  gender: {
    types: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  password: {
    types: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  is_active: {
    types: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdat: {
    types: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: false
  },
  updateat: {
    types: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  deletedat: {
    types: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }

}, {
  sequelize,
  modelName: 'User' ,
});
return User ;
};