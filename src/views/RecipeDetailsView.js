import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const RecipeDetailsView = ({ location }) => {
  const recipe = location.state.recipe;

  const history = useHistory();

  const handleGoBack = () => {
    console.log("History:", history);
  };

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
      <Row>
        <Col lg={11} md={11} sm={11} className="text-capitalize text-secondary">
          <h2 className="text-primary">{label}</h2>
        </Col>
        <Col
          lg={1}
          md={1}
          sm={1}
          className="text-capitalize text-secondary"
        >
          <Button type="button" onClick={handleGoBack}>
            Back
          </Button>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col lg={10} md={10} sm={10} className="text-capitalize text-secondary">
          {dishType}
        </Col>

        <Col lg={12} md={12} sm={12} className="font-italic">
          Calories: {Math.floor(calories)}
        </Col>
        <Col
          lg={12}
          md={12}
          sm={12}
          className="text-primary font-weight-bold mt-4"
        >
          <a href={url} target="_blank">
            <h5>
              <i className="fas fa-external-link-alt"></i> Go to Full Recipe
            </h5>
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
              ingredients.map((item, index) => (
                <li key={item.text + index}>{item.text}</li>
              ))}
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
