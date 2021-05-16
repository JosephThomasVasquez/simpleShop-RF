import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ListItem from "./ListItem";
// import { useUserShopList } from "../../contexts/ShopListContext";

const ShoppingList = ({ listTitle, listItems }) => {
  const handleSaveList = () => {};

  return (
    <Container>
      <Row>
        <Col md={12} sm={12}>
          <Card className="gradient-buttons shadow">
            <Card.Body>
              <Card.Title className="text-center">
                <h4>{listTitle}</h4>
              </Card.Title>

              <ul>
                {listItems &&
                  listItems.map((item) => (
                    <div
                      key={item.id}
                      className="item-container"
                      style={
                        item.completed
                          ? {
                              background: "rgba(255, 210, 117, 0.1)",
                              transition: "all 1s",
                            }
                          : null
                      }
                    >
                      <ListItem item={item} />
                    </div>
                  ))}
              </ul>

              <Container fluid="md">
                <Row className="mt-4">
                  <Col md={6} sm={3} className="p-0">
                    <Button
                      variant="primary"
                      className="gradient-buttons"
                      onClick={handleSaveList}
                    >
                      Save
                    </Button>
                  </Col>
                  <Col md={6} sm={3} className="p-0">
                    <button
                      variant="danger"
                      className="gradient-buttons list-delete-btn"
                    >
                      Delete
                    </button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingList;
