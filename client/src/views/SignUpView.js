import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

const SignUpView = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [signUpError, setSignUpError] = useState("");

  const { signUp, currentUser } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setSignUpError("Passwords do not match!");
      console.log("signup Error Match Pass", signUpError);
    } else {
      try {
        setSignUpError("");
        await signUp(emailRef.current.value, passwordRef.current.value);
      } catch (error) {
        setSignUpError(
          "Error creating account. Please check email and passwords."
        );
        console.log("signup Error Creating Account", signUpError);
      }
    }
  };
  return (
    <div>
      <Container>
        <h1 className="pt-5">Sign Up</h1>

        <Row>
          <Col md={12}>
            <Form onSubmit={handleSignUp}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter a Password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Form.Group id="confirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              <Link to="/signin" className="ml-3">
                Already have an Account?
              </Link>
            </Form>
            User: {JSON.stringify(currentUser)}
            Error: {JSON.stringify(signUpError)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpView;
