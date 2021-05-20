import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const RecipeDetailsView = ({ location }) => {
  const recipe = location.state.recipe;

  useEffect(() => {
    console.log("location", location);
    console.log("recipe Data", recipe);
  }, [location]);

  return (
    <Container>
      <h1>Recipe Details</h1>
      <Row>
        <Col md={12} sm={12}></Col>
      </Row>
    </Container>
  );
};

export default RecipeDetailsView;
