import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { appFirestore } from "../firebase/config";

const ShopListView = () => {
  const [shopItemsList, setShopItemsList] = useState([{}]);

  return (
    <div>
      <Container>
        <Row>
          <h1>Shopping List</h1>
          <Col md={8}>
            <Form>
              <Form.Group controlId="addItemInput">
                <Form.Label>Add Item to your list</Form.Label>
                <Form.Control type="text" placeholder="Add item..." />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Item
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopListView;
