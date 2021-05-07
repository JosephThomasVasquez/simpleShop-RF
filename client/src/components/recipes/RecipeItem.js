import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
const RecipeItem = ({ recipe }) => {

  return (
    <Col md={4}>
      <Card className="shadow m-2">
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
