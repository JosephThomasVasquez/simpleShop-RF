import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import unirest from "unirest";

const RecipeList = ({ searchRecipes }) => {
  return (
    <Container>
      <h2>{searchRecipes.length > 0 ? "Search Results:" : "Ey Yo!"}</h2>
      <Row>
        <Col>
          <div>{searchRecipes && JSON.stringify(searchRecipes)}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeList;
