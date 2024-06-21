/* eslint-disable react/prop-types */
import './RecipesCard.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Modal } from "@mui/material";
import React from 'react';
import { HeartIcon } from "@heroicons/react/24/outline";
function RecipesCard({ recipe }) {
  console.log(recipe);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Filtra los ingredientes y medidas válidos
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() && measure && measure.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

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
                  <div id="ingredients">
                    <ul>
                      <h2>Ingredients</h2>
                      {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <h2>Cooking Instructions</h2>
                  <div id="Instructions">{recipe.strInstructions}</div>
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
          <Button size="small" color="primary">
            <HeartIcon/>
          </Button>
        </CardActions>
      </Card>

      {/* <div id="container_recipeCard">
        <div className="image-container">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>

        <div id="info-container">
          <div id="recipeName">
            <h1>{recipe.strMeal}</h1>
          </div>

          <div id="ingredients">
            <ul>
              <h2>Ingredients</h2>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <h2>Cooking Instructions</h2>
          <div id="Instructions">{recipe.strInstructions}</div>
        </div>
      </div> */}
    </>
  );
}

export default RecipesCard;



  
