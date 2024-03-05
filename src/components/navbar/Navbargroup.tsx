import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// const ContainerFlex = styled(Container)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

function Navbargroup() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
            <Nav.Link href="#pricing">Preço</Nav.Link>
            <Nav.Link href="#pricing">Contato</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="#pricing">Cadastre -se</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbargroup;
