import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";
import { useUserShopList } from "../../contexts/ShopListContext";
import { useAuth } from "../../contexts/AuthContext";
import { auth, appFirestore } from "../../firebase/config";

const ShoppingList = ({ listTitle, addItem }) => {
  const { getShopList, updateShopList } = useUserShopList();
  const [shopList, setShopList] = useState([]);

  // console.log("Shop List FS:", shopList);

  const { currentUser } = useAuth();

  const getList = async () => {
    const ref = appFirestore.collection("users").doc(currentUser.uid);
    // console.log("ref:", ref);

    try {
      const results = [];
      let querySnapshot = await ref.get().then((doc) => {
        results.push(doc.data());
      });

      console.log("Results:", results);
      setShopList({ ...results });
      return results;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getList();

    if (shopList.length > 0) {
      console.log("Shop List FS:", shopList[0].items);
    }
  }, []);

  // console.log("AddItem shoppinglist", addItem);

  const handleToggleComplete = (e) => {
    console.log("item", e.target);
    // console.log("getShopList", getShopList);
  };

  const handleSaveList = () => {
    updateShopList(listTitle, addItem);
  };

  // console.log("userShopLIST", useUserShopList());
  // getShopList();

  return (
    <div>
      <Card className="gradient-buttons shadow">
        <Card.Body>
          <Card.Title className="text-center">{listTitle}</Card.Title>

          <ul>
            {addItem &&
              addItem.map((item) => (
                <div
                  key={item.key}
                  onClick={handleToggleComplete}
                  className="item-container"
                >
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
