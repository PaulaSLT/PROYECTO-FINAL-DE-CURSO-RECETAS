
const { DataTypes } = require('sequelize')
const sequelize = require('../../db')


 
const Recipe = sequelize.define('recipe', {
        
    strMeal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    strIngredients: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
          const strIngredients = this.getDataValue('strIngredients');
          return strIngredients ? JSON.parse(strIngredients) : [];
        },
        set(value) {
          this.setDataValue('strIngredients', JSON.stringify(value));
        }
      },
   
    strInstructions: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 

    strMealThumb: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
})
module.exports = Recipe