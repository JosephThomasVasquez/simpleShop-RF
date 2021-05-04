import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import ShoppingList from "../components/shopList/ShoppingList";
import { useAuth } from "../contexts/AuthContext";
import { appFirestore } from "../firebase/config";

const ShopListView = () => {
  const { currentUser } = useAuth();

  const [item, setItem] = useState("");
  const [title, setTitle] = useState("Shopping List");
  const [shopItemsList, setShopItemsList] = useState([]);

  // Get snapshot update from docs
  const updateFSDocs = () => {
    const unsubscribe = appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items")
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setShopItemsList(data);
      });

    return () => unsubscribe();
  };

  useEffect(() => {
    const unsubscribe = appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items")
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setShopItemsList(data);
      });

    return () => unsubscribe();
  }, []);

  const updateShopList = async (item) => {
    console.log("item:", item);

    const ref = await appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc(title)
      .collection("items");

    return ref.add(item);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "item") {
      setItem(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (title === "" || title === undefined) {
      setTitle("Shopping List");
    }

    console.log("shopItemsList:", shopItemsList);
    console.log("title:", title);

    const data = {
      name: item,
      quantity: 1,
      completed: false,
      key: Date.now(),
    };

    updateShopList(data);
    setItem("");
    setShopItemsList("");
  };

  return (
    <div>
      <Container>
        <h1 className="pt-5">Shopping List</h1>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleAddItem}>
              <Form.Group>
                <Form.Label>
                  <span className="form-label-color">Title your List</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title, Store, Location..."
                  onChange={handleChange}
                  value={title}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <span className="form-label-color">Add items here:</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="item"
                  placeholder="Item, Product, Location "
                  onChange={handleChange}
                  value={item}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="gradient-buttons"
              >
                Add Item
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <ShoppingList listTitle={title} listItems={shopItemsList} />
            Item: {JSON.stringify(item)}
          </Col>
          <Col md={12}>shopItemsList: {JSON.stringify(shopItemsList)}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopListView;
