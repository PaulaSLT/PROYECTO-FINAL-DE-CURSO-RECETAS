const router = require('express').Router()
const {
  getFavouriteRecipes,
  addFavourite,
  deleteFavourite,
} = require('../controllers/favorite.controller')
const {checkAuth} = require('../middlewares/auth.middlewares')

router.get('/', checkAuth, getFavouriteRecipes)
router.post('/', checkAuth, addFavourite)
router.delete('/:recipeId', checkAuth, deleteFavourite)

module.exports = router
