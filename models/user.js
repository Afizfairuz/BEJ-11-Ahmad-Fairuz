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
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdat: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: false
  },
  updateat: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  deletedat: {
    type: DataTypes.DATEONLY,
    
  }

}, {
  sequelize,
  modelName: 'User' ,
});
return User ;
};