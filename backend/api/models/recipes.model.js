
const { DataTypes } = require('sequelize')
const sequelize = require('../../db')


 
const Recipe = sequelize.define('recipe', {
        
    strMeal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     strIngredients: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      const strIngredients = this.getDataValue('strIngredients');
      try {
        return strIngredients ? JSON.parse(strIngredients) : [];
      } catch (error) {
        console.error('Error parsing strIngredients JSON:', error);
        return [];
      }
    },
    set(value) {
      this.setDataValue('strIngredients', JSON.stringify(value));
    }
  },
    strInstructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, 

    strMealThumb: {
        type: DataTypes.STRING,
        allowNull: true,
      }, 

}, 
{timestamps: false}
)
module.exports = Recipe