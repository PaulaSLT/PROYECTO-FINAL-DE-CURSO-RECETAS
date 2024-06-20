import React, { useState, useEffect } from "react";
import RecipesCard from "./RecipesCard";
import { getRecipesByArea } from "../services/theMealDb";

function RecipesContainer() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getRecipesByArea("someArea"); // Ajusta esto según tu API
      setRecipe(data.meals[0]); // Ajusta esto según la estructura de los datos devueltos por tu API
    }

    fetchData();
  }, []);

  return <div>{recipe ? <RecipesCard recipe={recipe} /> : "Loading..."}</div>;
}

export default RecipesContainer;
