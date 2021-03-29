import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../styles/components/Button';
import ApiAxiosApiary from '../../../Utils/ApiAxiosApiary';

import { Container, SignForm, Form } from '../styles';

const initialState = {
  token: '',
  name: '',
  email: '',
  password: '',
  error: '',
  cpf: '',
  birth: '',
  address: '',
  neighborhood: '',
  city: '',
  cell: '',
  newpassword: '',
};

const SignUp = () => {
  const [values, setValues] = useState(initialState);
  const history = useHistory();

  const handleClickInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const body = {
      name: values.name,
      email: values.email,
      cpf: values.cpf,
      birth: values.birth,
      address: values.address,
      neighborhood: values.neighborhood,
      city: values.city,
      cell: values.cell,
      password: values.password,
      newpassword: values.newpassword,
    };

    ApiAxiosApiary.post('/signup', body).then((response) => {
      if (
        values.name !== '' &&
        values.email !== '' &&
        values.cpf !== '' &&
        values.birth !== '' &&
        values.address !== '' &&
        values.neighborhood !== '' &&
        values.city !== '' &&
        values.password !== '' &&
        values.newpassword !== ''
      ) {
        setValues(response.data);
        history.push('/');
      } else {
        console.log({ error: 'Preencha os dados para continuar!' });
      }
    });
  };

  const handleClickCameBack = (e) => {
    e.preventDefault();
    history.push('/signin');
  };

  return (
    <Container>
      <SignForm>
        <h1>Boas Vindas</h1>

        <Form>
          <div>
            <span>Nome</span>
            <input
              type="name"
              name="name"
              placeholder="Digite seu nome"
              value={values.name}
              onChange={handleClickInput}
            />
          </div>
          <div>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={values.email}
              onChange={handleClickInput}
            />
          </div>

          <div>
            <span>CPF:</span>
            <input type="text" name="cpf" placeholder="Digite seu CPF" value={values.cpf} onChange={handleClickInput} />
          </div>
          <div>
            <span>Data de Nascimento:</span>
            <input type="data" name="birth" placeholder="00/00/0000" value={values.birth} onChange={handleClickInput} />
          </div>
          <div>
            <span>Endereço:</span>
            <input
              type="text"
              name="address"
              placeholder="Digite seu Endereço"
              value={values.address}
              onChange={handleClickInput}
            />
          </div>
          <div>
            <span>Bairro:</span>
            <input
              type="text"
              name="neighborhood"
              placeholder="Digite seu Bairro"
              value={values.neighborhood}
              onChange={handleClickInput}
            />
          </div>
          <div>
            <span>Cidade:</span>
            <input
              type="text"
              name="city"
              placeholder="Digite sua Cidade"
              value={values.city}
              onChange={handleClickInput}
            />
          </div>
          <div>
            <span>Celular:</span>
            <input
              type="number"
              name="cell"
              placeholder="Digite seu Celular"
              value={values.cell}
              onChange={handleClickInput}
            />
          </div>
          <div>
            <span>Senha</span>
            <input
              placeholder="Digite sua senha"
              name="password"
              type="password"
              value={values.password}
              onChange={handleClickInput}
            />
          </div>
          <div>
            <span>Confirmar senha</span>
            <input
              type="password"
              name="newpassword"
              placeholder="Digite sua nova Senha"
              value={values.newpassword}
              onChange={handleClickInput}
            />
          </div>
        </Form>
        <div>
          <Button size="big" type="submit" onClick={handleClickCameBack}>
            Voltar
          </Button>

          <Button size="big" type="submit" onClick={handleSubmitLogin}>
            Enviar
          </Button>
        </div>
      </SignForm>
    </Container>
  );
};

export default SignUp;
