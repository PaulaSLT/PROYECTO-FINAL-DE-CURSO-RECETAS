const {DataTypes} = require('sequelize')
const sequelize = require('../../db')

const Favourite = sequelize.define(
  'favourite',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    externalId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isExternal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Favourite