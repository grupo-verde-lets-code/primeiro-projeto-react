import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useProdutos } from "../../contexts/Produtos";

const Register = () => {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [infos, setInfos] = useState("");
  const [peso, setPeso] = useState(0);
  const [produtos, setProdutos] = useProdutos();

  console.log("Título", titulo);
  console.log("Preço", preco);
  console.log("Infos", infos);
  console.log("Peso", peso);

  const handlerSubmit = (event) => {
    event.preventDefault()

    console.log("Produtos", produtos);

    setProdutos([{
      titulo,
      preco,
      infos,
      peso
    }])
  }

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
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control placeholder="Digite o Título" onChange={event => setTitulo(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Preço</Form.Label>
          <Form.Control placeholder="Digite o Preço" onChange={event => setPreco(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicInfos">
          <Form.Label>Informações/Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Descreva seu produto"
            onChange={event => setInfos(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group classname="mb-3" controlId="formBasicWeight">
          <Form.Label>Peso</Form.Label>
          <Form.Control placeholder="Digite o peso" onChange={event => setPeso(event.target.value)}></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export { Register };