import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import googleLogo from "../icons/Google__G__Logo.svg.png";
import { auth, appFirestore } from "../firebase/config";

const ProfileView = () => {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState({
    userAccount: `emailUser=${currentUser.email}`,
    userName: "",
    email: currentUser.email,
    isAdmin: false,
    isSubscriber: false,
  });

  useEffect(() => {
    const unsubscribe = appFirestore
      .collection("users")
      .doc(currentUser.uid)
      .collection("shoppingLists")
      .doc("Shopping List")
      .collection("items")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setUserDetails(data);
      });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name/value:", name, value);
  };

  const handleUpdateProfile = (e) => {};

  return (
    <div>
      <Container className="pt-4">
        <Row className="mb-5">
          <Col>
            <h1>
              Hello,{" "}
              <span className="profile-displayname">
                {currentUser.displayName ? (
                  <div>
                    {currentUser.displayName}{" "}
                    <img
                      src={googleLogo}
                      width="24px"
                      alt="Google Sign In Button"
                      className="img-google-btn"
                    />
                  </div>
                ) : (
                  currentUser.email
                )}
              </span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleUpdateProfile}>
              <Form.Group id="displayName">
                <Form.Label>Displayname</Form.Label>
                <Form.Control
                  type="text"
                  name="displayName"
                  placeholder="Displayname"
                  value={userDetails.userName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="email"
                  value={userDetails.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Row className="ml-auto">
                <Button
                  variant="secondary"
                  type="submit"
                  className="gradient-buttons"
                >
                  Update
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileView;
