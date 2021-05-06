import React, { useState } from "react";
import unirest from "unirest";

const RecipeList = () => {
  const [recipesList, setRecipesList] = useState();

  const getRecipes = () => {
    fetch("https://tasty.p.rapidapi.com/recipes/auto-complete", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": "b2f5ac83famshe8f912d34765e81p13d57ajsn49a745a48b65",
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        useQueryString: true,
      },
    }).then((response) => {
      console.log(response.json);
    });
  };

//   getRecipes();

  // Create state hook for API data

  // Get search query for API

  // Fetch API with headers

  // Update state with API data from query

  return (
    <div>
      <h2>Ey Yo!</h2>
    </div>
  );
};

export default RecipeList;
