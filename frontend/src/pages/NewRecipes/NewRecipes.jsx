
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { postRecipe } from "../../services/recipe.service";
import "./NewRecipes.css";
import { Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function NewRecipes() {
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instruction, setInstruction] = useState("");
  const [measure, setMeasure] = useState('')
  const navigate = useNavigate();
  const [ingredientes, setIngredientes] = useState([]);

  async function handleClick(event) {
    event.preventDefault();
    await postRecipe(mealName, ingredientes, instruction);
    
    toast.success('Recipe created!')
    
    setTimeout(() => {
        navigate('/myprofile')
      }, 2000)
  }

  const renderList = () => {
    return ingredientes.map((item, index) => (
      <li key={index}>{item.strIngredients} - {item.strMeasure}</li>
    ))
  };
  console.log(ingredientes)

  return (
    <>
      <div className="title-newrecipes">
        <h1>NewRecipes</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Recipe Name"
            value={mealName}
            onChange={(event) => setMealName(event.target.value)}
            required
          />
        </div>
      </div>

      <div className="new-recipes">
        <Typography variant="h5">Ingredients</Typography>

        <div className="input-section">
          <input
            placeholder="Ingredient - Example: Potatoes"
            onChange={(event) => setIngredients(event.target.value)}
            required
            rows="5"
            cols="50"
          />
        </div>

        <div className="input-section">
          <input
            id="measure"
            placeholder="Measure - Example: 2kg"
            onChange={(event) => setMeasure(event.target.value)}
            required
            rows="5"
            cols="50"
          />
        </div>

        <Fab
          color="primary"
          aria-label="add"
          onClick={() =>
            setIngredientes([
              ...ingredientes,
              { strIngredients: ingredients, strMeasure: measure },
            ])
          }
        >
          <AddIcon />
        </Fab>
      </div>

      <div className="aside">
        <Typography variant="h5">Instructions</Typography>
        <Typography variant="h5">Preview</Typography>
      </div>
      <div className="aside">
        <div className="input-textarea">
          <textarea
            id="measure"
            placeholder="Example: BoilingWater"
            onChange={(event) => setInstruction(event.target.value)}
            required
            rows="5"
            cols="50"
          />
        </div>

        <div className="preview">
          <span className="titleRecipe">{mealName}</span>
          <ul>{renderList()}</ul>
        </div>
      </div>
      <div className="button-newrecipes">
        <button onClick={handleClick}>Share your recipe</button>
      </div>
    </>
  );
}
