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
              addItem.map((item) => <ListItem item={item} key={item.key} />)}
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
