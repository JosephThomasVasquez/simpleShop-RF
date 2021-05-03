import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const Header = () => {
  const { currentUser, signOut } = useAuth();

  // console.log('Current LoggedIn User:', currentUser);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="gradient-header"
      >
        <Navbar.Brand href="/">
          <i className="far fa-clipboard icon-brand"></i>
          <span className="ml-3 align-text-bottom brand-title">ShopList</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link href="/">
                <span className="nav-link-color">Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shoppinglist">
              <Nav.Link href="/shoppinglist">
                <span className="nav-link-color">ShoppingList</span>
              </Nav.Link>
            </LinkContainer>
            {currentUser ? (
              <Button
                variant="primary"
                className="user-dropdown-btn gradient-buttons"
              >
                <NavDropdown
                  title={
                    currentUser.displayName
                      ? currentUser.displayName
                      : currentUser.email
                  }
                  id="basic-nav-dropdown"
                >
                  {currentUser && (
                    <LinkContainer to="/profile">
                      <NavDropdown.Item href="/profile">
                        <i className="fas fa-user nav-profile-icon"></i>Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                  )}
                  <NavDropdown.Divider />
                  <LinkContainer to="/">
                    <NavDropdown.Item href="/" onClick={handleSignOut}>
                      <i className="fas fa-sign-out-alt nav-profile-icon"></i>
                      Sign Out
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Button>
            ) : (
              <LinkContainer to="/signin">
                <Nav.Link href="signin" className="text-white">
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
            {!currentUser && (
              <LinkContainer to="/signup">
                <Nav.Link href="signup" className="text-white">
                  Sign Up
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
