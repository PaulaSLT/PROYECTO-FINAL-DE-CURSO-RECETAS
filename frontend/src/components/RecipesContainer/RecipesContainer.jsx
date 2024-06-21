import React, { useState, useEffect } from "react";
import RecipesCard from "./RecipesCard";
import { getRandomRecipe } from "../services/theMealDb.service";


function RecipesContainer() {
  const [recipes, setRecipes] = useState([]);
  const numberOfRecipes = 5; // Número de recetas que quieres obtener

  useEffect(() => {
    async function fetchData() {
      let fetchedRecipes = [];
      for (let i = 0; i < numberOfRecipes; i++) {
        const data = await getRandomRecipe();
        if (data && data.meals) {
          fetchedRecipes = [...fetchedRecipes, ...data.meals];
        }
      }
      setRecipes(fetchedRecipes);
    }

    fetchData();
  }, []);

  return (
    <div>
      {recipes.length > 0
        ? recipes.map((recipe, index) => (
            <RecipesCard key={index} recipe={recipe} />
          ))
        : "Loading..."}
    </div>
  );
}

export default RecipesContainer;
