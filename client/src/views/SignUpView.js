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

  const [signUpError, setSignUpError] = useState("");

  const { signUp, currentUser } = useAuth;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      setSignUpError("Passwords do not match!");
      console.log("signup Error Match Pass", signUpError);
    }

    try {
      const { email, password } = signUpDetails;

      await signUp({ email, password });
      setSignUpError("");
    } catch (error) {
      setSignUpError(
        "Error creating account. Please check email and passwords."
      );
      console.log("signup Error Creating Account", signUpError);
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
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={signUpDetails.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter a Password"
                  value={signUpDetails.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="confirmPassword">
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
                disabled={
                  signUpError === "" &&
                  signUpDetails.email === "" &&
                  signUpDetails.password === ""
                    ? true
                    : false
                }
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
