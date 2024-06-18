// user.router.js
const router = require('express').Router();
const {
	getAllRecipes,
	createRecipe,
	updateRecipe,
	getOneRecipe,
	deleteRecipe
} = require('../controllers/recipes.controller');

router.get('/', getAllRecipes);
router.get('/:id', getOneRecipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router
