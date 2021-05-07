import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
const RecipeItem = ({ recipe }) => {
  return (
    <Col md={4}>
      <Card className="shadow m-2">
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>Cal. {Math.floor(recipe.calories)}</Card.Text>
          {recipe.dietLabels.length > 0 ? (
            <Card.Text>Diet: {recipe.dietLabels}</Card.Text>
          ) : (
            <Card.Text>{' '}</Card.Text>
          )}
          <Button variant="secondary" className="gradient-buttons">View Recipe</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeItem;
