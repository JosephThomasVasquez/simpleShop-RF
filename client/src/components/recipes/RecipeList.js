import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ searchRecipes, searchTerm }) => {

  const {hits} = searchRecipes;

  return (
    <Container fluid>
      <Row className="my-2">
        <h5>{hits ? `Search results for: ${searchTerm}` : "Ey Yo!"}</h5>
      </Row>
      <Row>
        {hits && hits.map((item) => <RecipeItem recipe={item.recipe} key={item.recipe.url}/>)}
      </Row>
    </Container>
  );
};

export default RecipeList;
