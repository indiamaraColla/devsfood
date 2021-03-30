import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../styles/components/Button';
import { Container, SignForm } from '../styles';

import api from '../../../Utils/api';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [values, setValues] = useState(initialState);
  const history = useHistory();

  const handleClickInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: values.email,
      password: values.password,
    };

    api.post('/signin', body).then((response) => {
      if (values.email === response.data.email && values.password === response.data.password) {
        setValues(response.data);
        history.push('/');
      } else {
        alert('Dados Incorretos');
      }
    });
  };

  const handleClickRegister = (e) => {
    e.preventDefault();
    history.push('/signup');
  };

  return (
    <Container>
      <SignForm>
        <h1>Boas Vindas</h1>
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={values.email}
          onChange={handleClickInput}
        />

        <span>Senha</span>
        <input
          placeholder="Digite sua senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleClickInput}
        />

        <Button size="big" type="submit" onClick={handleClickSubmit}>
          Entrar
        </Button>

        <Button size="big" type="submit" onClick={handleClickRegister}>
          Cadastrar
        </Button>
      </SignForm>
    </Container>
  );
};

export default SignIn;
