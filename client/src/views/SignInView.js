import React, { useState, useRef } from "react";
import { signInWithGoogle } from "../firebase/config";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

const SignInView = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <Container>
        <h1 className="pt-5">Sign In</h1>
        <Row>
          <Col md={12}>
            <Form onSubmit={handleSignIn}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email"
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  ref={passwordRef}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
              <div>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-2"
                  onClick={signInWithGoogle}
                >
                  Sign In with Google
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInView;
