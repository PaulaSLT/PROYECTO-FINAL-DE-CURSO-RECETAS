import React, { useState, useEffect } from "react";
import RecipesCard from "./RecipesCard";
import {
  getRandomRecipe,
  getRecipesByArea,
} from "../services/theMealDb.service";
import Search from "../SearchRecipe/SearchRecipe";

function RecipesContainer() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [loading, setLoading] = useState(true); 
  const numberOfRecipes = 5; 

  useEffect(() => {
    async function fetchData() {
      setLoading(true); 

      let fetchedRecipes = [];
      if (!searchTerm) {
        for (let i = 0; i < numberOfRecipes; i++) {
          const data = await getRandomRecipe();
          if (data && data.meals) {
            fetchedRecipes = [...fetchedRecipes, ...data.meals];

          }
        }
      } else {
        const data = await getRecipesByArea(searchTerm);
        if (data) {
          fetchedRecipes = data;
        }
      }


      setRecipes(fetchedRecipes);
      setLoading(false); 

    fetchData();
  }, [searchTerm]); 

  const handleSearch = (area) => {
    setSearchTerm(area); 
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />{" "}
      {/}
      {loading
        ? "Loading..." 
        : recipes.length > 0
        ? recipes.map((recipe, index) => (
            <RecipesCard key={recipe.idMeal} recipe={recipe} />
          ))
        : "No recipes found." 
      }
    </div>
  );
}

export default RecipesContainer;
