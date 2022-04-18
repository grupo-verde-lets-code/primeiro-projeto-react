import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

export const DefaultTemplate = (props) => {
  return (
    <>
      <Navbar className="navbar" bg="primary" variant="light">
        <Container>
          <Navbar.Brand className="navbar-brand" href="/">
            E-Commerce
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="navbar-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/registrar">
              Registrar
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <main>{props.children}</main>

      <footer></footer>
    </>
  );
};
