import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";

const ShoppingList = ({ listTitle, addItem }) => {
  console.log("AddItem shoppinglist", addItem);

  return (
    <div>
      <Card className="gradient-buttons shadow">
        <Card.Body>
          <Card.Title className="text-center">{listTitle}</Card.Title>

          <ul>
            {addItem &&
              addItem.map((item) => (
                <div key={item.key}>
                  <Container fluid="md">
                    <Row>
                      <Col md={2}><i className="fas fa-check-circle"></i></Col>
                      <Col md={8}>
                        <ListItem item={item} />
                      </Col>
                      <Col md={2}></Col>
                    </Row>
                  </Container>
                </div>
              ))}
          </ul>

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
