import React from 'react'
import { postRecipe } from "../services/recipe.service";
export default function NewRecipes() {

    async function handleClick() {

        const response = await postRecipe()
        console.log(response)
    }

  return (
    <div>
      <h1>NewRecipes</h1>
      <input placeholder='Meal'/>
      <input placeholder='Ingredients'/>
      <input placeholder='Instructions'/>
      <input placeholder='MealThumb'/>
      <button onClick={handleClick}>

      </button>
    </div>
  )
}