import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import EmailIcon from '../../assets/EmailIcon.svg';
import PasswordIcon from '../../assets/PasswordIcon.svg';
import styles from './LoginPage.module.css'

export const LoginPage = () => {
  return (
    <div className="container mt-4">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail" className="d-flex my-3">
          <Card.Img src={EmailIcon} className={styles.img} />
          <Form.Control size="lg" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="d-flex my-3">
          <Card.Img src={PasswordIcon} className={styles.img} />
          <Form.Control size="lg" type="password" placeholder="Senha" />
        </Form.Group>

        <Button size="lg" className="mt-4" variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
      <div className="d-flex gap-5">
        <Link to="#" className={styles.link}>Esqueci minha senha</Link>       
        <Link to="/accounts/register/" className={styles.link}>Criar conta</Link>
      </div>
    </div>
  );
};
