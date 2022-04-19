import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useProdutos } from "../../contexts/Produtos";

import "../../Styles/css/Register.css";

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
      <Container>
        <Form className="form" onSubmit={handlerSubmit}>
          <Form.Group className="mb-3 form-group" controlId="formBasicTitle">
            <Form.Label className="form-label">Nome</Form.Label>
            <Form.Control className="form-control" placeholder="Digite o nome do produto" />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formBasicPrice">
            <Form.Label className="form-label">Preço</Form.Label>
            <Form.Control className="form-control" placeholder="Digite o Preço" />
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formBasicInfos">
            <Form.Label className="form-label">Informações/Descrição</Form.Label>
            <Form.Control className="form-control" as="textarea" rows={5} placeholder="Descreva seu produto"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 form-group" controlId="formBasicWeight">
            <Form.Label className="form-label">Peso</Form.Label>
            <Form.Control className="form-control" placeholder="Digite o peso"></Form.Control>
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
