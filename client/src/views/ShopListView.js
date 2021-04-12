import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FirestoreGetCollection from "../components/firebase/FirestoreGetCollection";
import data from "../data/data";

const ShopListView = () => {
  const [shopItemsList, setShopItemsList] = useState([...data]);
  const { firestoreDocs } = FirestoreGetCollection(
    "users",
    "yWhkLb4vW3wR5SpmSha6"
  );
  // console.log(shopItemsList);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "item") {
      setShopItemsList({ ...shopItemsList, item: value });
    }
    console.log("firestoreDocs", firestoreDocs);
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    console.log("items:", shopItemsList);
  };

  const addToFirestore = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Container>
        <h1 className="pt-5">Shopping List</h1>
        <Row>
          <Col md={8}>
            <Form onSubmit={handleAddItem}>
              <Form.Group controlId="addItemInput">
                <Form.Label>Add Item to your list</Form.Label>
                <Form.Control
                  type="text"
                  name="item"
                  placeholder="Add item..."
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Item
              </Button>
            </Form>
          </Col>
          <Col md={2}>{JSON.stringify(shopItemsList)}</Col>
          <Button variant="primary" type="submit" onSubmit={addToFirestore}>
            Add to Firestore
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ShopListView;
