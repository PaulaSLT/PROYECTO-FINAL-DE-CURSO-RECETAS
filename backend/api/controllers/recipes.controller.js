const Recipe = require("../models/recipes.model")

async function getAllRecipes(req,res){
    try {
        const recipes = await Recipe.findAll()
        if(recipes) {
            return res.status(200).json(recipes)

            }else{
            return res.status(404).send("No recipeS found!")
            }

    } catch (error) {
        res.status(500).send(error.message)   
    }
}

async function getAllRecipesCreatedByMe(req, res){
    try {

        const recipes = await Recipe.findAll({where: {userId: res.locals.user.id}})

        if(recipes.length < 0) return res.status(404).send("No recipeS found!")

        res.status(200).json(recipes)
        
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function getOneRecipe(req,res){
    try {
        const recipe = await Recipe.findByPk(req.params.id)
        if(recipe){
            return res.status(200).json(recipe)
        } else{
            return res.status(404).send("No recipe found!")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createRecipe(req, res) {
  try {
    const recipe = await Recipe.create(req.body)

    recipe.update({userId: res.locals.user.id})

    res.status(200).json({message: 'Recipe created', recipe})

  } catch (error) {
    res.status(404).send(error.message)
    }
}


async function updateRecipe(req, res) {
	try {
		const [recipeExist, recipe] = await Recipe.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (recipeExist !== 0) {
			return res.status(200).json({ message: 'Recipe updated', recipe: recipe})
		} else {
			return res.status(404).send('Recipe not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteRecipe(req, res) {
	try {
		const recipe = await Recipe.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (recipe) {
			return res.status(200).json('Recipe deleted')
		} else {
			return res.status(404).send('Recipe not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = { 
    getAllRecipes,
    getOneRecipe,
    getAllRecipesCreatedByMe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
 }