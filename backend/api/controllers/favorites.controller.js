const Recipe = require("../models/recipes.model") 
const User = require("../models/user.model")


async function getMyFavorites(req, res) {
  try {
    const userId = res.locals.user.id;

    const user = await User.findByPk(userId, {
      include: [
        {
          model: Recipe,
          as: 'favourites',
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const favourites = user.favourites;

    if (!favourites || favourites.length === 0) {
      return res.status(404).send('Favourites not found');
    }

    return res.status(200).json(favourites);
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    return res.status(500).send('Error al obtener favoritos');
  }
}


module.exports = {
    getMyFavorites
}

