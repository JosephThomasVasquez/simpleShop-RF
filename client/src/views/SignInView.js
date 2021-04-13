import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SignInView = () => {
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <Container>
        <h1 className="pt-5">Sign In</h1>
        <Row>
          <Col md={12}>
            <Form onSubmit="">
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="email" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Oassword</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInView;
