import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ searchRecipes, searchTerm }) => {
  const { results } = searchRecipes;

  return (
    <Container fluid>
      <Row className="my-2">
        <h5>{results ? `Search results for: ${searchTerm}` : "Ey Yo!"}</h5>
      </Row>
      <Row>
        {results && results.map((item) => <RecipeItem recipe={item} key={item.id}/>)}
      </Row>
    </Container>
  );
};

export default RecipeList;
