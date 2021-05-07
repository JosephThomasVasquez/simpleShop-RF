import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ searchRecipes }) => {

  const { results } = searchRecipes;
  console.log("searchRecipes", results);

  return (
    <Container>
      <h2>{results.length > 0 ? "Search Results:" : "Ey Yo!"}</h2>
      <Row>
        {results.length > 0 &&
          results.map((item) => <RecipeItem recipe={item} />)}
      </Row>
    </Container>
  );
};

export default RecipeList;
