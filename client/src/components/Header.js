import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";

const Header = () => {
  const { currentUser, signOut } = useAuth();

  console.log('Current LoggedIn User:', currentUser);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/"><i className="far fa-clipboard icon-brand"></i><span className="ml-3 align-text-bottom brand-title">ShopList</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shoppinglist">ShoppingList</Nav.Link>
            {currentUser ? (
              <NavDropdown
                title={
                  currentUser.displayName
                    ? currentUser.displayName
                    : currentUser.email
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={handleSignOut}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="signin">Sign In</Nav.Link>
            )}
            {!currentUser && <Nav.Link href="signup">Sign Up</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
