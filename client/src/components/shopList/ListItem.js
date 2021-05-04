import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { appFirestore } from "../../firebase/config";

const ListItem = ({ item }) => {
  const { currentUser } = useAuth();

  const handleToggleComplete = async (e) => {
    const toggleComplete = !item.completed;

    await appFirestore
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
          <i
            className="fas fa-check-circle item-completed-icon"
            style={
              item.completed
                ? {
                    opacity: "1",
                    color: "rgba(252, 122, 87, 1)",
                    transform: "scale(1.5)",
                    transition: "all 1s",
                  }
                : { opacity: "0.1", transition: "all 1s" }
            }
          ></i>
        </Col>
        <Col md={8} xs={7} onClick={handleToggleComplete}>
          <div
            className="item-li"
            name={item.id}
            style={
              item.completed
                ? {
                    textDecoration: "line-through",
                    color: "rgba(252, 122, 87, 0.75)",
                    transition: "all 1s",
                  }
                : { textDecoration: "none", transition: "all 1s" }
            }
          >
            {item.name}
          </div>
        </Col>
        <Col md={2} xs={3}>
          <span
            style={
              item.completed
                ? {
                    textDecoration: "line-through",
                    color: "rgba(252, 122, 87, 0.5)",
                    transition: "all 1s",
                  }
                : { textDecoration: "none", transition: "all 1s" }
            }
          >
            qty: {item.quantity}
          </span>
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
