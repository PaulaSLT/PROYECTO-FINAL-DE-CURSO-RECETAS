import './RecipesCard.css'

function RecipesCard({ recipe }) {
  console.log(recipe);

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
      <div id="container_recipeCard">
        <div className="image-container">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div id="info-container">
  
          <div id="recipeName">
            <h1>{recipe.strMeal}</h1>
          </div>
          <div id="ingredients">
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div id="Instructions">{recipe.strInstructions}</div>
        </div>
      </div>
    </>
  );
}

export default RecipesCard;
