
const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      //validation: pass with at least 8 char: 1 caracter especial, 1 minuscula, 1 mayus
    },
    
  }
 
})

module.exports = User