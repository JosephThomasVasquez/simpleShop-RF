import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
// import { auth, appFirestore } from "../firebase/config";

const ProfileView = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <Header />
      <Container className="pt-4">
        <Row>
          <Col>
            <h1>
              Hello,{" "}
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileView;
