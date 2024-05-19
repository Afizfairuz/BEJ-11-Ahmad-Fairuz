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
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  
  created_at: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: false
  },

}, {
  sequelize,
  modelName: 'user' ,
  tableName: 'user'
});
return user ;
};