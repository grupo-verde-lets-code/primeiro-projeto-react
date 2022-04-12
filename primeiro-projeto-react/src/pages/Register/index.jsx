import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Register = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control placeholder="Digite o Título" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Preço</Form.Label>
          <Form.Control placeholder="Digite o Preço" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicInfos">
          <Form.Label>Informações/Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Descreva seu produto"
          ></Form.Control>
        </Form.Group>
        <Form.Group classname="mb-3" controlId="formBasicWeight">
          <Form.Label>Peso</Form.Label>
          <Form.Control placeholder="Digite o peso"></Form.Control>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Imagem do produto</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export { Register };