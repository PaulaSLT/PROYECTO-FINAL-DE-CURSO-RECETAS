import React, { useEffect, useState } from 'react'
import { getRecipesCreatedByMe } from '../../services/recipe.service'
import RecipesCard from '../../components/Recipes Card/RecipesCard'

function MyRecipes() {
    const [myRecipes, setMyRecipes] = useState([])

    useEffect(function(){
        async function getMyRecipes(){
            const response = await getRecipesCreatedByMe()
            setMyRecipes(response)
        }   
        getMyRecipes()
    },[] )


  return (
    <>
      <h2 className="title-newrecipes">My Recipes</h2>
      <div id="recipes-container">
        {myRecipes.length > 0 ? (
          myRecipes?.map((recipe, idx) => (
            <RecipesCard key={idx} recipe={recipe} />
          ))
        ) : (
          <h1>No recipes yet</h1>
        )}
      </div>
    </>
  );
}

export default MyRecipes

