import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getFavourites } from "../../services/favourite.service";
import RecipesCard from "../../components/Recipes Card/RecipesCard";
import "./myFavourites.css";

function MyFavorite() {
  const [favRecipe, setFavRecipe] = useState([]);
  const [isFavorite, setIsFavorite] = useState(true);

  useEffect(function () {
    async function getFavRecipe() {
      const response = await getFavourites();
      setFavRecipe(response);
      console.log(response);
    }
    getFavRecipe();
  }, []);

  return (
    <>
      <h2 className="title-newrecipes"> Favourites </h2>

      <div id="recipes-container">
        {favRecipe.length > 0 ? (
          favRecipe?.map((recipe, idx) => (
            <RecipesCard
              key={idx}
              recipe={recipe}
              img={recipe.image}
              isFav={isFavorite}
              handleFav={setIsFavorite}
            />
          ))
        ) : (
          <h1>No favorite recipes yet</h1>
        )}
      </div>
    </>
  );
}

export default MyFavorite;
