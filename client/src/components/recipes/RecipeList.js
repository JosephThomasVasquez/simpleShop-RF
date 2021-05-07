import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import RecipeItem from "./RecipeItem";
import unirest from "unirest";

const RecipeList = ({ searchRecipes }) => {
  return (
    <Container>
      <h2>{searchRecipes.length > 0 ? "Search Results:" : "Ey Yo!"}</h2>
      <Row>
        <div>{searchRecipes && JSON.stringify(searchRecipes)}</div>
        {searchRecipes.length > 0 &&
          searchRecipes.map((recipe) => (
            <RecipeItem recipe={recipe}></RecipeItem>
          ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
