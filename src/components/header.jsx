import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" className="header_bg">
        <Container>
          <Navbar.Brand href="/">Shopkeeper</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">mbr-sagor</Nav.Link>
              <Nav.Link href="#pricing">Profile</Nav.Link>
              <Nav.Link href="#pricing">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
