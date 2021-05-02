import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <Header />
      <Container className="pt-4">
        <h1>ShopList</h1>
        <Row>
          <Col>
            <h4>Need to make a shopping list?</h4>
            <h4>Sign up is easy and its free!</h4>
            <p>
              Get a free account here,{" "}
              <Link to="/signup" className="mr-3 ml-auto">
                <strong>Sign Up!</strong>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeView;
