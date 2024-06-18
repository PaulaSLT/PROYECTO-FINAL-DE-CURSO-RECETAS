
const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Area = sequelize.define('area', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

})

module.exports = Area