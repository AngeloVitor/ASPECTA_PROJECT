import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SideAspecta } from '../../components/sideAspecta/SideAspecta';
import styles from './RegisterPage.module.css';
// import Card from 'react-bootstrap/Card';
// import UserIcon from '../../assets/UserIcon.svg';
// import EmailIcon from '../../assets/EmailIcon.svg';
// import PasswordIcon from '../../assets/PasswordIcon.svg';
// import NumberIcon from '../../assets/NumberIcon.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';

export const RegisterPage = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    senha: yup.number().required(),
    number: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <div className="container d-flex">
      <SideAspecta />
      <div className="col-8">
        <h1 className={styles.tittle}>
          Comece agora seu cadastro, e junte-se a nós para uma nova aventura!
        </h1>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            name: '',
            email: '',
            senha: '',
            number: '',
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="validationFormik01" className="my-5">
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="validationFormik02" className="my-5">
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="validationFormikUsername" className="my-5">
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="senha"
                    aria-describedby="inputGroupPrepend"
                    name="senha"
                    value={values.senha}
                    onChange={handleChange}
                    isInvalid={!!errors.senha}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.senha}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="validationFormik05" className="my-5">
                <Form.Control
                  type="text"
                  placeholder="number"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  isInvalid={!!errors.number}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
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
