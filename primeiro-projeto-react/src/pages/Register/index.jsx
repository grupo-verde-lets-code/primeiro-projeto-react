import React from "react";
import { Container, Form, Button, InputGroup, FormControl } from "react-bootstrap";

import "../../Styles/css/Register.css";

const Register = () => {
  return (
    <>
      <Container>
        <Form className="form">
          <Form.Group className="mb-3 form-group" controlId="formBasicTitle">
            <Form.Label className="form-label">Nome</Form.Label>
            <Form.Control className="form-control" placeholder="Digite o nome do produto" />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formBasicPrice">
            <Form.Label className="form-label">Preço</Form.Label>
            <InputGroup>
            <InputGroup.Text className="form-control input-addon">R$</InputGroup.Text>
            <FormControl className="form-control" placeholder="Digite o Preço" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formBasicInfos">
            <Form.Label className="form-label">Informações/Descrição</Form.Label>
            <Form.Control
              className="form-control"
              as="textarea"
              rows={5}
              placeholder="Descreva seu produto"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formBasicWeight">
            <Form.Label className="form-label">Peso</Form.Label>
            <InputGroup>
            <Form.Control className="form-control" placeholder="Digite o peso"></Form.Control>
            <InputGroup.Text className="form-control input-addon">Kg</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3 form-group">
            <Form.Label className="form-label">Imagem do produto</Form.Label>
            <Form.Control className="form-control" type="file" />
          </Form.Group>
          <Button className="submit-button" variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export { Register };
