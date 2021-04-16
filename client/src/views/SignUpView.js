import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

const SignUpView = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpError, setSignUpError] = useState('');

  const { signUp } = useAuth;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      setSignUpError("Passwords do not match!");
    }

    try {
      const { email, password } = signUpDetails;

      await setSignUpDetails({ email, password });
      setSignUpError("");
    } catch (error) {
      setSignUpError(
        "Error creating account. Please check email and passwords."
      );
    }
  };
  return (
    <div>
      <Header />
      <Container>
        <h1 className="pt-5">Sign Up</h1>
        <Row>
          <Col md={12}>
            <Form onSubmit={handleSignUp}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={signUpDetails.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter a Password"
                  value={signUpDetails.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signUpDetails.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                disabled={signUpError === "" && signUpDetails.email === "" && signUpDetails.password === "" ? true : false}
              >
                Sign Up
              </Button>
              <Link to="/signin" className="ml-3">
                Already have an Account?
              </Link>
            </Form>
            {JSON.stringify(signUpDetails)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpView;
