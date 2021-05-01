import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";

const ShoppingList = ({ listTitle, addItem }) => {
  console.log("AddItem shoppinglist", addItem);

  const handleToggleComplete = (e) => {
    console.log('item', e.target)
  }

  return (
    <div>
      <Card className="gradient-buttons shadow">
        <Card.Body>
          <Card.Title className="text-center">{listTitle}</Card.Title>

          <ul>
            {addItem &&
              addItem.map((item) => (
                <div key={item.key} onClick={handleToggleComplete} className="item-container">
                  <Container fluid="md">
                    <Row>
                      <Col md={1}>
                        <i className="fas fa-check-circle"></i>
                      </Col>
                      <Col md={8}>
                        <ListItem item={item} />
                      </Col>
                      <Col md={2}>
                        <span>qty: {item.quantity}</span>
                      </Col>
                      <Col md={1}>
                        <i className="fas fa-minus-circle"></i>
                      </Col>
                    </Row>
                  </Container>
                </div>
              ))}
          </ul>

          <Container fluid="md">
            <Row>
              <Col md={6}>
                <Button variant="primary" className="gradient-buttons">
                  Save
                </Button>
              </Col>
              <Col md={6}>
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
