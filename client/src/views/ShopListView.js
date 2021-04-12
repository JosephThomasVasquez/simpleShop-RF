import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { appFirestore } from "../firebase/config";
import data from "../data/data";

const ShopListView = () => {
  const [shopItemsList, setShopItemsList] = useState([...data]);
  console.log(shopItemsList);

  return (
    <div>
      <Container>
        <h1 className="pt-5">Shopping List</h1>
        <Row>
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
          <Col md={2}>{JSON.stringify(shopItemsList)}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopListView;
