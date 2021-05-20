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
    url,
  } = recipe;

  const nutrients = Object.entries(totalNutrients);

  useEffect(() => {
    console.log("location", location);
    console.log("recipe Data", recipe);
  }, [location]);

  return (
    <Container className="bg-white mt-4 p-4 pb-5 shadow">
      <h2 className="text-primary">{label}</h2>
      <Row className="pb-4">
        <Col lg={12} md={12} sm={12}>
          {dishType}
        </Col>
        <Col lg={12} md={12} sm={12} className="text-secondary">
          Calories: {Math.floor(calories)}
        </Col>
        <Col lg={12} md={12} sm={12} className="text-primary font-weight-bold">
          <a href={url} target="_blank">
            <i className="fas fa-external-link-alt"></i> Go to Full Recipe
          </a>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12} className="pb-4">
          <img src={image} alt={label} className="shadow rounded" />
        </Col>
        <Col lg={6} md={6} sm={12} className="pb-4">
          <h3 className="text-primary">Ingredients</h3>
          <ul>
            {ingredients &&
              ingredients.map((item) => <li key={item.text}>{item.text}</li>)}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <h3 className="text-primary">Nutrients</h3>
          <ul>
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
