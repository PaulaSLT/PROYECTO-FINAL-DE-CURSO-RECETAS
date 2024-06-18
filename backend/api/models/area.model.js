
const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Area = sequelize.define('area', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},
{timestamps: false}
)

module.exports = Area