import React from 'react';
import Navbargroup from '../navbar/Navbargroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Cadastro() {
  return (
    <>
      <Navbargroup />
      <div className="d-flex justify-content-between m-auto">
        <div>sadasdas</div>
        <form className="">
          <Form.Label htmlFor="inputPassword">Nome Completo</Form.Label>
          <Form.Control type="password" placeholder="Nome Completo" />
          <Form.Label htmlFor="inputPassword">Senha</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            placeholder="Senha"
          />
          <Form.Label htmlFor="inputPassword5">Email</Form.Label>
          <Form.Control type="email" id="inputEmail" placeholder="Email" />
          <Form.Label htmlFor="inputTelefone">Telefone</Form.Label>
          <Form.Control
            type="tel"
            id="inputTelefone"
            placeholder="(99) 99999-9999"
            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
          />
        </form>
      </div>
    </>
  );
}

export default Cadastro;
