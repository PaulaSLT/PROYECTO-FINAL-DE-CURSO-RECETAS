const Recipe = require("../api/models/recipes.model");
const User = require("../api/models/user.model");
const Area = require("../api/models/area.model");


function  initRelationships() {
  try {
    Area.hasOne(Recipe, { onDelete: "CASCADE", onUpdate: "CASCADE" });
    Recipe.belongsTo(Area);

    User.hasMany(Recipe, { onDelete: "CASCADE", onUpdate: "CASCADE" });
    Recipe.belongsTo(User);

    User.belongsToMany(Recipe, {
      through: "Favourites",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Recipe.belongsToMany(User, {
      through: "Favourites",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  } catch (error) {
    throw new Error("Error adding relations to models", error);
  }
}

module.exports = {
  initRelationships,
};
