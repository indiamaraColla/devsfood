import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: #202225;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignForm = styled.div`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0 0.2);
  padding: 40px;
  width: 800px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  span {
    color: #b9bbbe;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-top: 15px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0 0.3);
    background-color: #36393f;
    color: #f6f6f6;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;
    -webkit-box-shadow: 0 0 0px 1000px #36393f inset;
    -webkit-text-fill-color: #f6f6f6 !important;

    &:focus {
      border-color: #7289da;
    }
  }

  button {
    margin: 20px 0 0;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;

    button {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div {
    width: calc(50% - 8px);
    display: flex;
    flex-direction: column;
    margin: 4px;
    align-items: end;
  }
`;
