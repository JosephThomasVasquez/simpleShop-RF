import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const RecipeDetailsView = ({ location }) => {
  const recipe = location.state.recipe;

  const {
    label,
    calories,
    cuisineType,
    dietLabels,
    dishType,
    healthLabels,
    totalNutrients,
    image,
    ingredients,
  } = recipe;

  const nutrients = Object.entries(totalNutrients);

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
      <Row className="my-5">
        <Col lg={12} md={12} sm={12}>
          <h3 className="text-primary">Nutrients</h3>
          <ul className="pl-3">
            {nutrients &&
              nutrients.map((item) => (
                <li key={item[0]}>
                  {item[1].label}: {Math.floor(item[1].quantity)}
                  {item[1].unit}
                </li>
              ))}
          </ul>
        </Col>
        <Col lg={6} md={6} sm={12}></Col>
      </Row>
    </Container>
  );
};

export default RecipeDetailsView;
