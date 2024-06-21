/* eslint-disable react/prop-types */
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

function RecipesCard({ recipe }) {
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
    setIsFavorite(!isFavorite);
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

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Button onClick={handleOpen}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.strMeal}
                  </Typography>
                </CardContent>
                <Typography variant="body2">
                  <span id="ingredients">
                    <p>Ingredients</p>
                    <ul>
                      {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
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
            <CardMedia
              component="img"
              height="140"
              image={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </Button>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.strMeal}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={toggleFavorite}>
            {isFavorite ? <HeartSolidIcon /> : <HeartOutlineIcon />}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default RecipesCard;