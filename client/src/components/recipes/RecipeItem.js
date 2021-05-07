import React from "react";
import { Col, Button, Card } from "react-bootstrap";
const RecipeItem = ({ recipe }) => {
  console.log(recipe);

  return (
    <Col>
      <Card></Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>Spoonacular API</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeItem;
