import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  const recipeId = recipe.shareAs.split("/")[4];

  return (
    <Col md={6} lg={4} xl={4}>
      <Card className="shadow m-2">
        <Card.Img
          className="recipe-item-img"
          variant="top"
          src={recipe.image}
        />
        <Card.Body className="p-2">
          <Card.Title className="m-0">{recipe.label}</Card.Title>
          <Card.Text className="m-0">
            Cal. {Math.floor(recipe.calories)}
          </Card.Text>
          {recipe.dietLabels.length > 0 ? (
            <Card.Text className="m-0 mb-2">
              Diet: {recipe.dietLabels}
            </Card.Text>
          ) : (
            <Card.Text> </Card.Text>
          )}
          <Link
            to={{
              pathname: `/recipe/${recipeId}`,
              state: {
                recipe: recipe,
              },
            }}
            style={{ textDecoration: "none" }}
          >
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
