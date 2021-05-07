import React from "react";
import { Col, Button, Card } from "react-bootstrap";
const RecipeItem = ({recipe}) => {

    console.log(recipe);

  return (
    <Col>
      <Card></Card>
      <div>{JSON.stringify(recipe)}</div>
    </Col>
  );
};

export default RecipeItem;
