import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import Button from '../../styles/components/Button';
import api from '../../Utils/api';

import { Container, AccountArea, AccountList, AccountListItem, AccountListGroup, AccountButtonArea } from './styled';

const Profile = () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState('');
  const [values, setValues] = useState('');

  const handleEdit = (e) => {
    e.preventDefault();
    history.push('/my-account/update-profile');
  };
  const handleEditPassword = (e) => {
    e.preventDefault();
    history.push('/my-account/update-password');
  };

  useEffect(() => {
    api.post('/signup').then((response) => {
      setValues(response.data);
    });
  }, []);

  return (
    <Container>
      <Header headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} />

      <AccountArea>
        <h1>MEU PERFIL</h1>

        <AccountList>
          <AccountListGroup>
            <AccountListItem>
              <span>Nome:</span>
              <p>{values.name}</p>
            </AccountListItem>
            <AccountListItem>
              <span>CPF:</span>
              <p>{values.cpf}</p>
            </AccountListItem>
          </AccountListGroup>

          <AccountListGroup>
            <AccountListItem>
              <span>Data de Nascimento:</span>
              <p>{values.birth}</p>
            </AccountListItem>

            <AccountListItem>
              <span>E-mail:</span>
              <p>{values.email}</p>
            </AccountListItem>
          </AccountListGroup>

          <AccountListGroup>
            <AccountListItem>
              <span>Endereço:</span>
              <p>
                {values.address}, número {values.number}
              </p>
            </AccountListItem>

            <AccountListItem>
              <span>Bairro:</span>
              <p>{values.neighborhood}</p>
            </AccountListItem>
          </AccountListGroup>

          <AccountListGroup>
            <AccountListItem>
              <span>Cidade:</span>
              <p>{values.city}</p>
            </AccountListItem>

            <AccountListItem>
              <span>Celular:</span>
              <p>{values.cell}</p>
            </AccountListItem>
          </AccountListGroup>
        </AccountList>
        <AccountButtonArea>
          <Button size="big" type="submit" onClick={handleEdit}>
            Alterar dados
          </Button>
          <Button size="big" type="submit" onClick={handleEditPassword}>
            Alterar senha
          </Button>
        </AccountButtonArea>
      </AccountArea>
    </Container>
  );
};

export default Profile;
