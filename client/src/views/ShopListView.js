import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";
import FirestoreGetCollection from "../components/firebase/FirestoreGetCollection";
import { appFirestore } from "../firebase/config";
import data from "../data/data";

const ShopListView = () => {
  const { currentUser } = useAuth();
  const [item, setItem] = useState("");
  const [shopItemsList, setShopItemsList] = useState([]);
  const { firestoreDocs } = FirestoreGetCollection(currentUser.uid);
  // console.log(shopItemsList);

  useEffect(() => {
    console.log("USER", currentUser);
    appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        console.log("User ShoppingLists", doc.data());
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "item") {
      setItem(e.target.value);
    }
    console.log("firestoreDocs", firestoreDocs);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setShopItemsList([...shopItemsList, { name: item, key: Date.now() }]);
    console.log("items:", shopItemsList);
  };

  const addToFirestore = async (e) => {
    e.preventDefault();
    console.log("test");

    const fakeId = "yxh123898sfsfj";

    const docRef = await appFirestore
      .collection("users/Kxg6FWVE1CMpNGmCgUQk/shoppingLists")
      .add({
        id: fakeId,
        name: data[0].name,
        category: data[0].category,
        type: data[0].type,
        count: data[0].count,
      });
    await console.log("getDoc", docRef.get());
  };

  return (
    <div>
      <Header />
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
          {/* <Button variant="primary" type="button" onClick={addToFirestore}>
            Add to Firestore
          </Button> */}
          <Col md={2}>{JSON.stringify(item)}</Col>
          <Col md={2}>{JSON.stringify(shopItemsList)}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopListView;
