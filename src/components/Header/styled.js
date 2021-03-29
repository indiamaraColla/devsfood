import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #551a8b;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.img`
  height: 70px;
  width: auto;
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: 0;
  height: 50px;
  outline: 0;
  background-color: #fff;
  background-image: url('/assets/search.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 50px;
  transition: all ease 0.3s;
  cursor: pointer;
  font-size: 16px;

  ${(props) =>
    props.isactive &&
    css`
      width: 100%;
      margin-left: 20px;
    `};

  &:focus {
    cursor: text;
  }
`;
