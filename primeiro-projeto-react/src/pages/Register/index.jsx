import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

/* import "../../Styles/css/Register.css"; */

const Register = () => {
  return (
    <>
      <Container>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Nome</Form.Label>
            <Form.Control className="form-control" placeholder="Digite o nome do produto" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Preço</Form.Label>
            <Form.Control className="form-control" placeholder="Digite o Preço" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInfos">
            <Form.Label>Informações/Descrição</Form.Label>
            <Form.Control className="form-control" as="textarea" rows={5} placeholder="Descreva seu produto"></Form.Control>
          </Form.Group>
          <Form.Group classname="mb-3" controlId="formBasicWeight">
            <Form.Label>Peso</Form.Label>
            <Form.Control className="form-control" placeholder="Digite o peso"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Imagem do produto</Form.Label>
            <Form.Control className="form-control" type="file" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export { Register };
