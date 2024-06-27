const Favourite = require('../models/favourite.model')
const Recipe = require('../models/recipes.model')
const User = require('../models/user.model')
const fetch = require('node-fetch')

const addFavourite = async (req, res) => {
  const { externalId, recipeId} = req.body
  

  try {
    if (!externalId && !recipeId) {
      return res
        .status(400)
        .json({error: 'Debe proporcionar un externalRecipeId o un recipeId.'})
    }

    const user = await User.findByPk(res.locals.user.id)
    if (!user) {
      return res.status(404).json({error: 'Usuario no encontrado.'})
    }

    const favouriteData = {
      userId: user.id,
      isExternal: !!externalId,
      externalId: externalId || null,
      recipeId: recipeId || null,
    }

    const favourite = await Favourite.create(favouriteData)
    res.status(201).json(favourite)
  } catch (error) {
    console.error('Error añadiendo favorito:', error)
    res.status(500).json({error: 'Error añadiendo favorito.'})
  }
}

const getFavouriteRecipes = async (req, res) => {
  const {id} = res.locals.user

  try {
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({error: 'Usuario no encontrado.'})
    }

    const favourites = await Favourite.findAll({
      where: {userId: id},
      include: [Recipe],
    })

    const favouriteRecipes = await Promise.all(
      favourites.map(async (favourite) => {
        if (favourite.isExternal) {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favourite.externalId}`
          )
          const data = await response.json()
          return data.meals[0]
        } else {
          return favourite.recipe
        }
      })
    )

    res.status(200).json(favouriteRecipes)
  } catch (error) {
    console.error('Error obteniendo favoritos:', error)
    res.status(500).json({error: 'Error obteniendo favoritos.'})
  }
}




const deleteFavourite = async (req, res) => {
  const {recipeId} = req.params
  const {id} = res.locals.user
  try {
    let favourite = await Favourite.findOne({where: {recipeId, userId: id}})
    if (!favourite) {
      favourite = await Favourite.findOne({
        where: {externalId: recipeId, userId: id},
      })
    }
    if (!favourite) {
      return res.status(404).json({error: 'Favorito no encontrado.'})
    }
    await favourite.destroy()
    res.status(200).json({message: 'Favorito eliminado correctamente.'})
  } catch (error) {
    console.error('Error eliminando favorito:', error)
    res.status(500).json({error: 'Error eliminando favorito.'})
  }
}

module.exports = {
  addFavourite,
  getFavouriteRecipes,
  deleteFavourite
}