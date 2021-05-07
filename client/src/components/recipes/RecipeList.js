import React, { useState } from "react";
import unirest from "unirest";

const RecipeList = () => {
  const [recipesList, setRecipesList] = useState([]);

  const getRecipes = async () => {
    await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=e60a67731a434f1e82adafaab14cdfc7",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "x-rapidapi-key": "e60a67731a434f1e82adafaab14cdfc7",
          // "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => {
        // console.log("recipes response", response.json());
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRecipesList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // getRecipes();

  // Get search query for API

  // Fetch API with headers

  // Update state with API data from query

  return (
    <div>
      <h2>Ey Yo!</h2>
      <div>{}</div>
    </div>
  );
};

export default RecipeList;
