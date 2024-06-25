import React, { useEffect, useState } from "react";
import "./SearchRecipe.css";
import { getRecipesByArea } from "../../services/theMealDb.service";

function Search({ handleInfo }) {
  const [inputValue, setInputValue] = useState("");
  async function handleClick() {
    const response = await getRecipesByArea(inputValue);
    if (!response) return handleInfo([]);
    handleInfo(response);

    setInputValue("");
  }

  return (
    <div id="input-container">
      <input
        className="inputSearch"
        placeholder="Search a recipe"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />

      <button onClick={handleClick} id="buttonSearch">
        Explore new cuisines
      </button>
    </div>
  );
}

export default Search;
