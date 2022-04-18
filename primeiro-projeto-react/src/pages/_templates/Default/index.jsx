import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const DefaultTemplate = (props) => {
  return (
    <>
      <Navbar className="navbar" bg="primary" variant="light">
        <Container>
          <Navbar.Brand className="navbar-brand" href="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/registrar">Registrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <main>{props.children}</main>

      <footer></footer>
    </>
  );
};
