import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ShoppingList = () => {
  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className="justify-content-center gradient-buttons shadow"
      >
        <Card.Body>
          <Card.Title>List</Card.Title>
          <Card.Text>
            <ul>
              <li>Bacon</li>
              <li>Eggs</li>
              <li>Bread</li>
              <li>Sausage</li>
              <li>Toilet Paper</li>
            </ul>
          </Card.Text>
          <Container fluid="md">
            <Row>
              <Col>
                <Button variant="primary" className="gradient-buttons">
                  Save
                </Button>
              </Col>
              <Col>
                <Button variant="danger" className="gradient-buttons">
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShoppingList;
