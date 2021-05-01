import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../firebase/config";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import googleLogo from "../icons/Google__G__Logo.svg.png";

const SignInView = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [signInError, setSignInError] = useState("");

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setSignInError("");
      await signIn(emailRef.current.value, passwordRef.current.value);
      await history.push("/shoppinglist");
    } catch (error) {
      setSignInError("Error logging in. Please check email and password.");
      console.log("Login Error", signInError);
    }
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
              <Row className="ml-auto">
                <Button variant="primary" type="submit" className="gradient-buttons">
                  Sign In
                </Button>
                <Button
                  type="button"
                  className="ml-2 google-btn gradient-buttons"
                  onClick={signInWithGoogle}
                >
                  <img src={googleLogo} width="24px" alt="Google Sign In Button" className="img-google-btn"/>
                  Sign In with Google
                </Button>
                <Link to="/signup" className="mr-3 ml-auto">
                  Need an account?
                </Link>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInView;
