import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div className="container mt-4">
      <h1>Register</h1>
      <Form>
        <Form.Group controlId="formBasicName" className='d-flex'>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className='d-flex'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='d-flex'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="mt-4" size="lg" variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      <p className="mt-4">
        Você ja tem Cadastro? <Link to="/accounts/login/">Clique aqui</Link>
      </p>
    </div>
  );
};
