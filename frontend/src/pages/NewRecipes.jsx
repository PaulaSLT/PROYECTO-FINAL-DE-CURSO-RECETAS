import React, { useState } from "react";
import { postRecipe } from "../services/recipe.service";
export default function NewRecipes() {
    
    const [meal, setMeal] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instruction, setInstruction] = useState("");
  async function handleClick(event) {
    event.preventDefault();
    const response = await postRecipe(meal, ingredients, instruction);
    console.log(response);
  }

  return (
    <div>
      <h1>NewRecipes</h1>
      <input
        placeholder="Meal"
        onChange={(event) => setMeal(event.target.value)}
        required
      />
      <input
        placeholder="Ingredients"
        onChange={(event) => setIngredients(event.target.value)}
        required
      />
      <input
        placeholder="Instructions"
        onChange={(event) => setInstruction(event.target.value)}
        required
      />
      
      <button onClick={handleClick}></button>
    </div>
  );
}
