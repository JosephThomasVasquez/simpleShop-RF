import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { auth, appFirestore } from "../../firebase/config";

const ListItem = ({ item }) => {
  const { currentUser } = useAuth();

  const handleToggleComplete = async (e) => {
    console.log("item", e.target);

    const toggleComplete = !item.completed;

    const ref = await appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items")
      .doc(`${item.id}`)
      .set({ ...item, id: item.id, completed: toggleComplete });
  };

  const handleRemoveItem = async (e) => {
    const ref = await appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items")
      .doc(`${item.id}`);

    try {
      let snapshot = ref.delete();
      return snapshot;
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col md={1} xs={1}>
          <i className="fas fa-check-circle"></i>
        </Col>
        <Col md={8} xs={7} onClick={handleToggleComplete}>
          <div className="item-li" name={item.id}>
            {item.name} {JSON.stringify(item.completed)}
          </div>
        </Col>
        <Col md={2} xs={3}>
          <span>qty: {item.quantity}</span>
        </Col>
        <Col md={1} xs={1}>
          <>
            <button
              className="item-delete-btn"
              onClick={handleRemoveItem}
              name={item.name}
            >
              <i
                className="fas fa-minus-circle item-delete-icon"
                name={item.name}
              ></i>
            </button>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default ListItem;
