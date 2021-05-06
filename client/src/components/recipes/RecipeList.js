import React, { useState } from "react";
import unirest from "unirest";

const RecipeList = () => {
  const [recipesList, setRecipesList] = useState();

  const getRecipes = () => {
    const req = unirest("GET", "https://tasty.p.rapidapi.com/recipes/list");

    req.query({ "from": "0"," size": "20", "tags": "under_30_minutes" });

    req.headers({
      "x-rapidapi-key": `${process.env.REACT_APP_TASTY_API_KEY}`,
      "x-rapidapi-host": "tasty.p.rapidapi.com",
      "useQueryString": true,
      "credentials": "include",
    });

    req.end(function (res) {
      if (res.error) throw new Error(res.error);

      console.log(res.body);
    });

    // fetch("https://tasty.p.rapidapi.com/recipes/auto-complete", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-rapidapi-key": "b2f5ac83famshe8f912d34765e81p13d57ajsn49a745a48b65",
    //     "x-rapidapi-host": "tasty.p.rapidapi.com",
    //     useQueryString: true,
    //   },
    // }).then((response) => {
    //   console.log(response.json);
    // });
  };

//   getRecipes();

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
