import React from "react";
import { useAuth } from "../contexts/AuthContext";
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
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/shoppinglist" className="text-white">
              ShoppingList
            </Nav.Link>
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
                  {!currentUser ? (
                    <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={handleSignOut}>
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Button>
            ) : (
              <Nav.Link href="signin" className="text-white">
                Sign In
              </Nav.Link>
            )}
            {!currentUser && (
              <Nav.Link href="signup" className="text-white">
                Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
