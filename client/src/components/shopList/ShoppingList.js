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
          <Card.Title className="text-center">{listTitle}</Card.Title>

          <ul>
            {listItems &&
              listItems.map((item) => (
                <div key={item.id} className="item-container">
                  <ListItem item={item} />
                </div>
              ))}
          </ul>

          <Container fluid="md">
            <Row>
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
