import React, { useState } from "react";
import unirest from "unirest";

const RecipeList = () => {
  const [recipesList, setRecipesList] = useState();

  const getRecipes = async () => {
    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": `${process.env.REACT_APP_TASTY_API_KEY}`,
          "x-rapidapi-host": "tasty.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getRecipes();

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
