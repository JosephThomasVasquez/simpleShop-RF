import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";
// import { useUserShopList } from "../../contexts/ShopListContext";

const ShoppingList = ({ listTitle, listItems }) => {
  const handleSaveList = () => {};

  return (
    <div>
      <Card className="gradient-buttons shadow">
        <Card.Body>
          <Card.Title className="text-center"><h4>{listTitle}</h4></Card.Title>

          <ul>
            {listItems &&
              listItems.map((item) => (
                <div key={item.id} className="item-container" style={
                  item.completed
                    ? {
                        background: "rgba(255, 210, 117, 0.1)",
                        transition: "all 1s",
                      }
                    : null
                }>
                  <ListItem item={item} />
                </div>
              ))}
          </ul>

          <Container fluid="md">
            <Row className="mt-4">
              <Col md={6} sm={3}>
                <Button
                  variant="primary"
                  className="gradient-buttons"
                  onClick={handleSaveList}
                >
                  Save
                </Button>
              </Col>
              <Col md={6} sm={3}>
                <Button variant="danger" className="gradient-buttons list-delete-btn">
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
