import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const RecipeDetailsView = ({ location }) => {
  const recipe = location.state.recipe;

  const {
    label,
    calories,
    cuisineType,
    dietLabels,
    digest,
    dishType,
    healthLabels,
    image,
    ingredients,
    foodId,
  } = recipe;

  useEffect(() => {
    console.log("location", location);
    console.log("recipe Data", recipe);
  }, [location]);

  return (
    <Container className="bg-white mt-4 p-4 pb-5 shadow">
      <h1 className="text-primary">{label}</h1>
      <Row className="pb-4">
        <Col lg={2} md={2} sm={2}>
          {dishType}
        </Col>
        <Col lg={2} md={2} sm={2} className="text-primary">
          Calories: {calories}
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <img src={image} alt={label} className="shadow rounded" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <ul>
            {ingredients &&
              ingredients.map((item) => <li key={item.text}>{item.text}</li>)}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetailsView;
