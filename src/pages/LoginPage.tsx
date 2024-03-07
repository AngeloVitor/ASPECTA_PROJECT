import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className="container mt-4">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control size="lg" type="password" placeholder="Password" />
        </Form.Group>

        <Button size="lg" className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-4">
        Don't have an account? <Link to="/accounts/register/">Register</Link>
      </p>
    </div>
  );
};
