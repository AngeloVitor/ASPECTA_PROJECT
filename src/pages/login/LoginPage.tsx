import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import EmailIcon from '../../assets/EmailIcon.svg';
import PasswordIcon from '../../assets/PasswordIcon.svg';
import styles from './LoginPage.module.css';
import { SideAspecta } from '../../components/sideAspecta/SideAspecta';

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <SideAspecta />
        <div className="col-8 align-items-center mt-5">
          <h1 className="d-flex justify-content-center mt-5">Login</h1>
          <Form className="d-flex flex-column justify-content-center mt-5">
            <Form.Group
              controlId="formBasicEmail"
              className="d-flex my-3 align-items-center justify-content-center mt-5"
            >
              <Card.Img src={EmailIcon} className={styles.img} />
              <Form.Control
                size="lg"
                type="email"
                placeholder="Email"
                className={styles.input}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              className="d-flex my-3 align-items-center justify-content-center mt-3"
            >
              <Card.Img src={PasswordIcon} className={styles.img} />
              <Form.Control
                size="lg"
                type="password"
                placeholder="Senha"
                className={styles.input}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                size="lg"
                className={styles.button + ' mt-5'}
                variant="primary"
                type="submit"
              >
                Entrar
              </Button>
            </div>
          </Form>
          <div className="d-flex mt-5 gap-5 justify-content-center">
            <Link to="#" className={styles.link}>
              Esqueci minha senha
            </Link>
            <Link to="/register/" className={styles.linkRegister}>
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
