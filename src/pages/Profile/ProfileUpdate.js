import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import Button from '../../styles/components/Button';
// import db from '../../mocksJson/_signup.json';

import { Container, AccountArea, AccountList, AccountListItem, AccountListGroup, AccountButtonArea } from './styled';

const initialState = {
  name: '',
  cpf: '',
  birth: '',
  email: '',
  address: '',
  neighborhood: '',
  city: '',
  cell: '',
  password: '',
  newpassword: '',
};

const ProfileUpdate = () => {
  const [headerSearch, setHeaderSearch] = useState('');
  const history = useHistory();
  const [values, setValues] = useState(initialState);

  const handleClickInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefaul();

    // const body = {
    //   name: values.name,
    //   cpf: values.cpf,
    //   birth: values.birth,
    //   email: values.email,
    //   address: values.neighborhood,
    //   neighborhood: values.neighborhood,
    //   city: values.city,
    //   cell: values.cell,
    //   password: values.password,
    //   newpassword: values.newpassword,
    // };
  };

  const handleButtonEdit = (e) => {
    e.preventDefault();
    history.push('/my-account');
  };

  const handleButtonCameBach = (e) => {
    e.preventDefault();
    history.push('/my-account');
  };

  return (
    <Container>
      <Header headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} />

      <AccountArea>
        <h1>MEUS DADOS</h1>
        <AccountList onSubmit={handleSubmitEdit}>
          <AccountListGroup>
            <AccountListItem>
              <span>Nome:</span>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={values.name}
                onChange={handleClickInput}
              />
            </AccountListItem>
            <AccountListItem>
              <span>CPF:</span>
              <input
                type="number"
                name="cpf"
                placeholder="Digite seu CPF"
                value={values.cpf}
                onChange={handleClickInput}
              />
            </AccountListItem>
          </AccountListGroup>
          <AccountListGroup>
            <AccountListItem>
              <span>Data de Nascimento:</span>
              <input
                type="data"
                name="birth"
                placeholder="00/00/0000"
                value={values.birth}
                onChange={handleClickInput}
              />
            </AccountListItem>
            <AccountListItem>
              <span>E-mail:</span>
              <input
                type="text"
                name="email"
                placeholder="Digite seu email"
                value={values.email}
                onChange={handleClickInput}
              />
            </AccountListItem>
          </AccountListGroup>
          <AccountListGroup>
            <AccountListItem>
              <span>Endereço:</span>
              <input
                type="text"
                name="address"
                placeholder="Digite seu Endereço"
                value={values.address}
                onChange={handleClickInput}
              />
            </AccountListItem>
            <AccountListItem>
              <span>Bairro:</span>
              <input
                type="text"
                name="neighborhood"
                placeholder="Digite seu Bairro"
                value={values.neighborhood}
                onChange={handleClickInput}
              />
            </AccountListItem>
          </AccountListGroup>

          <AccountListGroup>
            <AccountListItem>
              <span>Cidade:</span>
              <input
                type="text"
                name="city"
                placeholder="Digite sua Cidade"
                value={values.city}
                onChange={handleClickInput}
              />
            </AccountListItem>

            <AccountListItem>
              <span>Celular:</span>
              <input
                type="number"
                name="cell"
                placeholder="Digite seu Celular"
                value={values.cell}
                onChange={handleClickInput}
              />
            </AccountListItem>
          </AccountListGroup>
          <AccountListGroup>
            <AccountListItem>
              <span>Senha:</span>
              <input
                type="text"
                name="password"
                placeholder="Digite sua Senha"
                value={values.password}
                onChange={handleClickInput}
              />
            </AccountListItem>
            <AccountListItem>
              <span>Nova Senha:</span>
              <input
                type="text"
                name="newpassword"
                placeholder="Digite sua nova Senha"
                value={values.newpassword}
                onChange={handleClickInput}
              />
            </AccountListItem>
          </AccountListGroup>
        </AccountList>
        <AccountButtonArea>
          <Button size="big" type="submit" onClick={handleButtonCameBach}>
            Cancelar
          </Button>
          <Button size="big" type="submit" onClick={handleButtonEdit}>
            Salvar dados
          </Button>
        </AccountButtonArea>
      </AccountArea>
    </Container>
  );
};

export default ProfileUpdate;
