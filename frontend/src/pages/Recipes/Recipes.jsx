import React, { useDebugValue, useEffect, useState } from 'react'
import './Recipes.css'
import Search from '../../components/SearchRecipe/SearchRecipe'
import { getAllRecipesFromDBMeals } from '../../services/theMealDb.service'
import RecipesCard from '../../components/Recipes Card/RecipesCard'

function Recipes() {
  const [apiMeals, setApiMeals] = useState([])
  const [filteredMeals, setFilteredMeals] = useState([])

  useEffect(function() {
    async function getAllRecipesFromApiMeals () {
      const response = await getAllRecipesFromDBMeals()
      setApiMeals(response)
      console.log(apiMeals);
    }

    getAllRecipesFromApiMeals()
   
  }, [])

  function handleFilteredRecipes (array){
    setFilteredMeals(array)
  }

  return (
    <div>
      <Search handleInfo={handleFilteredRecipes} />
      <div id="container">
        {filteredMeals.length > 0
          ? filteredMeals.map(function (recipe, idx) {
              return <RecipesCard key={idx} recipe={recipe} />;
            })

          : apiMeals.length > 0 &&
                apiMeals.map(function (recipe, idx) {
              return (
                <RecipesCard key={idx} recipe={recipe} />
              )
            
              
            })
          }  
      </div>
    </div>
  );
}

export default Recipes