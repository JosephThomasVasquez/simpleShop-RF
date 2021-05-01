import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";

const ShoppingList = () => {
  return (
    <div>
      <Card
        className="gradient-buttons shadow"
      >
        <Card.Body>
          <Card.Title className="text-center">List</Card.Title>
          <Card.Text>
            <ul>
              <li className="item-li">Bacon</li>
              <li className="item-li"><ListItem /></li>
              <li className="item-li"><ListItem /></li>
              <li className="item-li"><ListItem /></li>
              <li className="item-li">Eggs</li>
              <li className="item-li">Bread</li>
              <li className="item-li">Sausage</li>
              <li className="item-li">Toilet Paper</li>
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
