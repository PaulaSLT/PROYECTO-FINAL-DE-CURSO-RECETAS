import React, { useState, useEffect } from "react";
import RecipesCard from "./RecipesCard";
import {
  getRandomRecipe,
  getRecipesByArea,
} from "../services/theMealDb.service";
import Search from "../SearchRecipe/SearchRecipe";

function RecipesContainer() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga
  const numberOfRecipes = 5; // Número de recetas aleatorias a obtener inicialmente

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Establecer el estado de carga a true al iniciar la búsqueda

      let fetchedRecipes = [];

      // Obtener recetas aleatorias si no hay un término de búsqueda
      if (!searchTerm) {
        for (let i = 0; i < numberOfRecipes; i++) {
          const data = await getRandomRecipe();
          if (data && data.meals) {
            fetchedRecipes = [...fetchedRecipes, ...data.meals];

          }
        }
      } else {
        // Obtener recetas por área si hay un término de búsqueda
        const data = await getRecipesByArea(searchTerm);
        if (data) {
          fetchedRecipes = data;
        }
      }


      setRecipes(fetchedRecipes);
      setLoading(false); // Establecer el estado de carga a false después de obtener los datos
    }

    fetchData();
  }, [searchTerm]); // Ejecutar efecto cada vez que cambia el término de búsqueda

  const handleSearch = (area) => {
    setSearchTerm(area); // Actualizar el término de búsqueda al hacer la búsqueda
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />{" "}
      {/* Componente Search para realizar la búsqueda */}
      {loading
        ? "Loading..." // Mostrar mensaje de carga mientras se obtienen los datos
        : recipes.length > 0
        ? recipes.map((recipe, index) => (
            <RecipesCard key={recipe.idMeal} recipe={recipe} />
          ))
        : "No recipes found." // Mostrar mensaje si no se encontraron recetas
      }
    </div>
  );
}

export default RecipesContainer;
