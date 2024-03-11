import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SideAspecta } from '../../components/sideAspecta/SideAspecta';
import styles from './RegisterPage.module.css';
import Card from 'react-bootstrap/Card';
import UserIcon from '../../assets/UserIcon.svg';
import EmailIcon from '../../assets/EmailIcon.svg';
import PasswordIcon from '../../assets/PasswordIcon.svg';
import NumberIcon from '../../assets/NumberIcon.svg';

export const RegisterPage = () => {
  return (
    <div className="container d-flex">
      <SideAspecta />
      <div className="col-8">
        <h1 className={styles.tittle}>
          Comece agora seu cadastro, e junte-se a nós para uma nova aventura!
        </h1>
        <Form>
          <Form.Group controlId="formBasicName" className="d-flex">
            <Card.Img src={UserIcon} className={styles.img} />
            <Form.Control
              type="text"
              placeholder="Enter name"
              className={styles.input}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="d-flex">
            <Card.Img src={EmailIcon} className={styles.img} />
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={styles.input}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="d-flex">
            <Card.Img src={PasswordIcon} className={styles.img} />
            <Form.Control
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="d-flex">
            <Card.Img src={NumberIcon} className={styles.img} />
            <Form.Control
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </Form.Group>
          <Button className="mt-4" size="lg" type="submit">
            Criar Miha Conta Grátis
          </Button>
        </Form>
        <p className={styles.term}>
          Ao clicar em “Criar minha conta grátis ”, declaro que aceito as
          Políticas de Privacidade e os Termos de Uso da ASPECTA.
        </p>
        <p className={styles.term + ' mt-4'}>
          Você ja tem Cadastro? <Link to="/login/">Clique aqui</Link>
        </p>
      </div>
    </div>
  );
};
