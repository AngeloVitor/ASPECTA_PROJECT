import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbargroup() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="HomeUser">Home</Nav.Link>
            <Nav.Link href="Sobre">Sobre</Nav.Link>
            <Nav.Link href="PrecoUser">Preço</Nav.Link>
            <Nav.Link href="ContatoUser">Contato</Nav.Link>
            <Nav.Link href="LoginUser">Login</Nav.Link>
            <Nav.Link href="CadastroUser">Cadastre -se</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbargroup;
