import React, { useState, ChangeEvent, FormEvent } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputMask from '../input/InputMask';

interface FormData {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

function CadastroUser(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.nome &&
      formData.email &&
      formData.senha &&
      formData.telefone
    ) {
      if (!validateEmail(formData.email)) {
        alert('Por favor, insira um email válido!');
        return;
      }
      if (!validatePhone(formData.telefone)) {
        alert(
          'Por favor, insira um telefone válido no formato (xx) xxxxx-xxxx!',
        );
        return;
      }
      localStorage.setItem('userData', JSON.stringify(formData));
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const regex = /^\(\d{2}\)\s?\d{5}-?\d{4}$/;
    return regex.test(phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="nome">
        <Form.Label column sm="2">
          Nome Completo
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Nome Completo"
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="email">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="senha">
        <Form.Label column sm="2">
          Senha
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Senha"
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="telefone">
        <Form.Label column sm="2">
          Telefone
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            as={InputMask}
            mask="(99) 99999-9999"
            alwaysShowMask={false}            
            placeholder="(99) 99999-9999"
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
}

export default CadastroUser;
