import React, { useState } from "react";
import unirest from "unirest";

const RecipeList = ({ searchRecipes }) => {
  // getRecipes();

  // Get search query for API

  // Fetch API with headers

  // Update state with API data from query

  return (
    <div>
      <h2>{searchRecipes.length > 0 ? "Search Results:" : "Ey Yo!"}</h2>
      <div>{searchRecipes && JSON.stringify(searchRecipes)}</div>
    </div>
  );
};

export default RecipeList;
