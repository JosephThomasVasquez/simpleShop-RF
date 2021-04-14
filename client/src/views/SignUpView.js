import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

const SignUpView = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setSignUpDetails({ name: "", email: "" });
  };
  return (
    <div>
      <Header />
      <Container>
        <h1 className="pt-5">Sign Up</h1>
        <Row>
          <Col md={12}>
            <Form onSubmit={handleSignIn}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email"
                  value={signUpDetails.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Oassword</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  value={signUpDetails.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              <Link to="/signin" className="ml-3">Already have an Account?</Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpView;
