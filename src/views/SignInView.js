import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../firebase/config";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ErrorMessage from "../components/ErrorMessage";
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
      await signIn(emailRef.current.value, passwordRef.current.value).then(
        await history.push("/shoppinglist")
      );
    } catch (error) {
      setSignInError("Error logging in. Please check email and password.");
      console.log("Login Error", signInError);
    }
  };

  return (
    <div>
      <Container className="py-4 my-4 bg-white shadow">
        <Row>
          <Col>
            <h1 className="text-primary">Sign In</h1>
          </Col>
        </Row>
        {signInError && (
          <Row>
            <Col>
              <ErrorMessage errorMsg={signInError} />
            </Col>
          </Row>
        )}

        <Row className="mt-5">
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
              <Row className="">
                <Col lg={8} md={12} sm={12}>
                  <Button
                    variant="primary"
                    type="submit"
                    className="gradient-buttons"
                  >
                    Sign In
                  </Button>
                  <Button
                    type="button"
                    className="ml-2 google-btn gradient-buttons"
                    onClick={signInWithGoogle}
                  >
                    <img
                      src={googleLogo}
                      width="24px"
                      alt="Google Sign In Button"
                      className="img-google-btn mr-2"
                    />
                    Sign In with Google
                  </Button>
                </Col>

                <Col md={2} sm={6} className="text-center mt-2">
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </Col>

                <Col md={2} sm={6} className="text-center mt-2">
                  <Link to="/signup">Need an account?</Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInView;
