import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";
// import { useUserShopList } from "../../contexts/ShopListContext";
import { useAuth } from "../../contexts/AuthContext";
import { auth, appFirestore } from "../../firebase/config";

const ShoppingList = ({ listTitle }) => {
  // const { getShopList, updateShopList } = useUserShopList();
  const [shopList, setShopList] = useState([]);

  const { currentUser } = useAuth();

  // const getList = () => {};

  useEffect(() => {
    const unsubscribe = appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items")
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.docs.map((doc) => {
          data.push({ id: doc.id, ...doc.data() });
          setShopList(data);
        });
        console.log("shopList", shopList);
      });

    if (shopList.length > 0) {
      console.log("Shop List FS:", shopList[0]);
    }
    return () => unsubscribe;
  }, []);

  const handleToggleComplete = (e) => {
    // console.log("item", e.target);
  };

  const handleSaveList = () => {};

  return (
    <div>
      <Card className="gradient-buttons shadow">
        <Card.Body>
          <Card.Title className="text-center">{listTitle}</Card.Title>

          <ul>
            {shopList !== undefined
              ? shopList.map((item) => (
                  <div
                    key={item.key}
                    onClick={handleToggleComplete}
                    className="item-container"
                  >
                    <ListItem item={item} />
                  </div>
                ))
              : null}
          </ul>

          <Container fluid="md">
            <Row>
              <Col md={6}>
                <Button
                  variant="primary"
                  className="gradient-buttons"
                  onClick={handleSaveList}
                >
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
