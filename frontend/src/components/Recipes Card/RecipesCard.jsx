import "./RecipesCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { getAllInformationFromMeal } from "../../services/theMealDb.service";
import {
  addFavouriteRecipe,
  deleteFavouriteRecipe,
} from "../../services/favourite.service";

function RecipesCard({ recipe, img = null, isFav = null, handleFav = null }) {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchedIngredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() && measure && measure.trim()) {
        fetchedIngredients.push(`${measure} ${ingredient}`);
      }
    }
    setIngredients(fetchedIngredients);

    const fetchedInstructions = recipe.strInstructions
      ? recipe.strInstructions
          .split(". ")
          .filter((instruction) => instruction.trim() !== "")
      : [];
    setInstructions(fetchedInstructions);
  }, [recipe]);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  useEffect(() => {
    async function getAllInformation() {
      console.log(recipe.idMeal);
      const response = await getAllInformationFromMeal(recipe.idMeal);
      const fetchedIngredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = response[`strIngredient${i}`];
        const measure = response[`strMeasure${i}`];
        if (ingredient && ingredient.trim() && measure && measure.trim()) {
          fetchedIngredients.push(`${measure} ${ingredient}`);
        }
      }
      setIngredients(fetchedIngredients);

      const fetchedInstructions = response.strInstructions
        ? response.strInstructions
            .split(". ")
            .filter((instruction) => instruction.trim() !== "")
        : [];
      setInstructions(fetchedInstructions);
    }

    if (!recipe.strIngredient1) {
      getAllInformation();
    }
  }, [recipe]);

  async function handleAddFavourite(recipe) {
    toggleFavorite();
    console.log(recipe);
    if (!isFavorite) {
      await addFavouriteRecipe(recipe);
    } else {
      await deleteFavouriteRecipe(recipe);
    }
    if (isFavorite !== null) handleFav(!isFav);
  }

  return (
    <>
      <Card sx={{ width: 300, minHeight: 230, color: "black" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={recipe.strMealThumb ? recipe.strMealThumb : img}
            alt={recipe.strMeal}
            onClick={handleOpen}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "black" }}
            >
              {recipe.strMeal}
            </Typography>
            {isFavorite || isFav ? (
              <HeartSolidIcon
                onClick={() => {
                  handleAddFavourite(recipe.idMeal ? recipe.idMeal : recipe.id);
                }}
                className="iconBtn fav"
              />
            ) : (
              <HeartOutlineIcon
                onClick={() =>
                  handleAddFavourite(
                    recipe.idMeal
                      ? { externalId: recipe.idMeal }
                      : { recipeId: recipe.id }
                  )
                }
                className="iconBtn"
              />
            )}
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ maxWidth: "60vw" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            width: "100%",
            left: "80%",
            transform: "translate(-50%, -50%)",
            borderRadius: "16px",
            border: "2px solid white",
            padding: "10px",
            bgcolor: "#d0f0c0",
            color: "black",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <CardContent className="card-content">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "black" }}
            >
              {recipe.strMeal}
            </Typography>
          </CardContent>
          <Typography variant="body2" sx={{ color: "black" }}>
            <span id="ingredients">
              <p>Ingredients</p>
              <ul>
                {ingredients?.length > 0
                  ? ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : recipe?.strIngredients?.map((item, index) => (
                      <li key={index}>
                        {item.strIngredients} - {item.strMeasure}
                      </li>
                    ))}
              </ul>
            </span>
            <p>Cooking Instructions</p>
            <div id="Instructions">
              <ul>
                {instructions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default RecipesCard;
