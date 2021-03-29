import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export const AccountArea = styled.div`
  color: #551a8b;
  margin-top: 20px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;
  width: 50%;

  h1 {
    margin-bottom: 20px;
  }
`;

export const AccountList = styled.form``;

export const AccountButtonArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

export const AccountListGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin-bottom: 16px;

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 2px solid #551a8b;
    background-color: #fff;
    color: #000;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #000 !important;

    &:focus {
      border-color: #c0a9d6;
    }
  }
`;

export const AccountListItem = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  span {
    font-size: 18px;
    font-weight: 500;
  }
`;
