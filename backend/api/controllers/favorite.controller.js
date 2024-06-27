const Favourite = require('../models/favourite.model')
const Recipe = require('../models/recipes.model')
const User = require('../models/user.model')
const fetch = require('node-fetch')

// Añadir favorito
const addFavourite = async (req, res) => {
  const { externalId, recipeId} = req.body
  

  try {
    // Validar que al menos uno de los IDs esté presente
    if (!externalId && !recipeId) {
      return res
        .status(400)
        .json({error: 'Debe proporcionar un externalRecipeId o un recipeId.'})
    }

    // Verificar que el usuario exista
    const user = await User.findByPk(res.locals.user.id)
    if (!user) {
      return res.status(404).json({error: 'Usuario no encontrado.'})
    }

    // Crear el favorito
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

// Obtener favoritos
const getFavouriteRecipes = async (req, res) => {
  const {id} = res.locals.user

  try {
    // Verificar que el usuario exista
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({error: 'Usuario no encontrado.'})
    }

    // Obtener los favoritos del usuario
    const favourites = await Favourite.findAll({
      where: {userId: id},
      include: [Recipe],
    })

    // Obtener detalles de recetas externas si es necesario
    const favouriteRecipes = await Promise.all(
      favourites.map(async (favourite) => {
        if (favourite.isExternal) {
          // Hacer una petición a la API externa
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favourite.externalId}`
          )
          const data = await response.json()
          return data.meals[0]
        } else {
          // Retornar la receta interna directamente
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


/**
 * Delete favourite recipe
 */

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