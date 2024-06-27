const Recipe = require('../api/models/recipes.model')
const User = require('../api/models/user.model')
const Area = require('../api/models/area.model')
const Favourite = require('../api/models/favourite.model')


function initRelationships() {
  try {
    Area.hasOne(Recipe, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    Recipe.belongsTo(Area)

    User.hasMany(Recipe, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    Recipe.belongsTo(User)

    User.hasMany(Favourite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    Favourite.belongsTo(User)

    Recipe.hasMany(Favourite, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    Favourite.belongsTo(Recipe)
  } catch (error) {
    throw new Error('Error adding relations to models', error)
  }
}

module.exports = {
  initRelationships,
}