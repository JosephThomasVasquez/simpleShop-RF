import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
// import { auth, appFirestore } from "../firebase/config";

const ProfileView = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <Container className="pt-4">
        <Row>
          <Col>
            <h1>
              Hello,{" "}
              <span className="profile-displayname">
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}
              </span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileView;
