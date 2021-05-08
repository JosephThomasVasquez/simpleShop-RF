import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  return (
    <Col md={4}>
      <Card className="shadow m-2">
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.label}</Card.Title>
          <Card.Text>Cal. {Math.floor(recipe.calories)}</Card.Text>
          {recipe.dietLabels.length > 0 ? (
            <Card.Text>Diet: {recipe.dietLabels}</Card.Text>
          ) : (
            <Card.Text> </Card.Text>
          )}
          <Link to="/">
            <Button variant="secondary" className="gradient-buttons">
              View Recipe
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeItem;
