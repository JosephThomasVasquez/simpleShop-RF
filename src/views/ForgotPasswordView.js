import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";

const ForgotPasswordView = () => {
  const emailRef = useRef();

  const { resetPasswordEmail } = useAuth();

  const [emailError, setEmailError] = useState("");

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      setEmailError("");
      resetPasswordEmail(emailRef.current.value);
    } catch (error) {
      setEmailError("Invalid email address. Please check email.");
      console.log("Email Error", emailError);
    }
  };

  return (
    <div>
      <Container className="py-4 my-4 bg-white shadow">
        <Row>
          <Col>
            <h1>Forgot Password</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Enter the email used for your account and you will receive an
              email with a link to reset your password.
            </p>
          </Col>
        </Row>
        {emailError && (
          <Row>
            <Col>
              <ErrorMessage errorMsg={emailError} />
            </Col>
          </Row>
        )}

        <Row className="mt-2">
          <Col md={12}>
            <Form onSubmit={handleForgotPasswordSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email"
                  ref={emailRef}
                />
              </Form.Group>

              <Row className="ml-auto">
                <Button
                  variant="primary"
                  type="submit"
                  className="gradient-buttons"
                >
                  Sign In
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPasswordView;
