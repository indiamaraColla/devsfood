import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import HeaderSearch from '../../components/HeaderSearch';
import Cart from '../../components/Cart';

import { Container, PageBody } from '../../AppStyled.js/styled';

import Button from '../../styles/components/Button';

import {
  ContainerArea,
  AccountArea,
  AccountList,
  AccountListItem,
  AccountListGroup,
  AccountButtonArea,
} from './styled';

const initialState = {
  password: '',
  newpassword: '',
};

const ProfileUpdatePassword = () => {
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
      <Header />
      <PageBody>
        <ContainerArea>
          <HeaderSearch headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} />

          <AccountArea>
            <h1> ALTERAR SENHA</h1>
            <AccountList onSubmit={handleSubmitEdit}>
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
        </ContainerArea>
      </PageBody>
      <Cart />
    </Container>
  );
};

export default ProfileUpdatePassword;
