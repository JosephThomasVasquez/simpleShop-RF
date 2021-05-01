import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ShoppingList = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="justify-content-center gradient-buttons shadow">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className="justify-content-center gradient-buttons">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShoppingList;
