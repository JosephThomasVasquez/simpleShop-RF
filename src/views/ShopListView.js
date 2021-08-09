import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ShoppingList from "../components/shopList/ShoppingList";
import { useAuth } from "../contexts/AuthContext";
import { appFirestore, timestamp } from "../firebase/config";
import ErrorMessage from "../components/ErrorMessage";

const ShopListView = () => {
  const { currentUser } = useAuth();

  const [item, setItem] = useState("");
  const [title, setTitle] = useState("Shopping List");
  const [shopItemsList, setShopItemsList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getDocTitleRef = async () => {
    const getRef = appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List");

    const doc = await getRef.get();

    if (!doc.exists) {
      return null;
    } else {
      setTitle(doc.data().title);
      console.log("Document data:", doc.data().title);
    }
  };

  // Add item as a firestore document to the collection
  const updateShopList = async (item) => {
    const ref = await appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items");

    return ref.add({ ...item, createdAt: timestamp });
  };

  // Get snapshot update from docs
  useEffect(() => {
    getDocTitleRef();

    const unsubscribe = appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const data = [];

        snapshot.docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setShopItemsList(data);
      });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "item") {
      setItem(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const handleUpdateTitle = async () => {
    const ref = await appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List");

    if (!title || title === "" || title === undefined) {
      setErrorMsg("Title cannot be empty!");
    } else {
      setErrorMsg("");
      return ref.set({ title: title });
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (title === "" || title === undefined) {
      setTitle("Shopping List");
    }

    const data = {
      name: item,
      quantity: 1,
      completed: false,
    };

    updateShopList(data);
    setItem("");
    setShopItemsList("");
  };

  return (
    <div>
      <Container className="bg-white mt-4 pb-5">
        <Row className="pt-5">
          <Col lg={3} md={3} sm={3} className="pr-0">
            <h1 className="text-primary">Shopping List</h1>
          </Col>
          <Col lg={9} md={9} sm={9} className="pl-0 my-auto">
            <p className="my-auto lead font-weight-normal">
              <em>{title}</em>
            </p>
          </Col>
        </Row>
        {errorMsg && <ErrorMessage errorMsg={errorMsg} />}
        <Row>
          <Col md={12}>
            <Form onSubmit={handleAddItem}>
              <Form.Group className="pb-2">
                <Form.Label>
                  <span className="form-label-color text-secondary">
                    Title your List
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title, Store, Location..."
                  onChange={handleChange}
                  value={title}
                />
                <Button
                  variant="primary"
                  type="button"
                  className="gradient-buttons mt-2"
                  onClick={handleUpdateTitle}
                >
                  Update Title
                </Button>
              </Form.Group>

              <Form.Group className="pb-2">
                <Form.Label>
                  <span className="form-label-color text-secondary">
                    Add items here:
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="item"
                  placeholder="Item, Product, Location "
                  onChange={handleChange}
                  value={item}
                />
                <Button
                  variant="primary"
                  type="submit"
                  className="gradient-buttons mt-2"
                >
                  Add Item
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={12}>
            <ShoppingList listTitle={title} listItems={shopItemsList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopListView;
