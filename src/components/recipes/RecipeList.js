import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ searchRecipes, searchTerm }) => {
  return (
    <Container fluid>
      <Row className="my-2">
        <h5>{searchRecipes ? `Search results for: ${searchTerm}` : null}</h5>
      </Row>
      <Row>
        {searchRecipes &&
          searchRecipes.map((item) => (
            <RecipeItem recipe={item.recipe} key={item.recipe.url} />
          ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
