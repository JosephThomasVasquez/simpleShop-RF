import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { auth, appFirestore } from "../../firebase/config";

const ListItem = ({ item }) => {
  const { currentUser } = useAuth();
  console.log(item);

  const handleRemoveItem = (e) => {
    // const removeItem = shopList.filter((item) => {
    //   console.log("item.name:", item.name);
    //   return e.target.attributes.name !== item.name;
    // });

    console.log(e.target.attributes.name);
  };
  return (
    <Container fluid="md">
      <Row>
        <Col md={1}>
          <i className="fas fa-check-circle"></i>
        </Col>
        <Col md={8}>
          <li className="item-li">{item.name}</li>
        </Col>
        <Col md={2}>
          <span>qty: {item.quantity}</span>
        </Col>
        <Col md={1}>
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
