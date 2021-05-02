import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const ProfileView = () => {
  return (
    <div>
      <Header />
      <Container className="pt-4">
        <h1>Profile</h1>
      </Container>
    </div>
  );
};

export default ProfileView;
