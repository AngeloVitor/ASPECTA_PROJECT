import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export function Navbargroup() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="m-auto">
            <Nav.Link>
              <Link className="link-underline-dark link-light" to={'home/'}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-underline-dark link-light" to={'about/'}>
                Sobre
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-underline-dark link-light" to={'price/'}>
                Preço
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-underline-dark link-light" to={'contact/'}>
                Contato
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link-underline-dark link-light"
                to={'register/'}
              >
                Registrar-se
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link-underline-dark link-light"
                to={'login/'}
              >
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
