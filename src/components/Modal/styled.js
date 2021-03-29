import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.status
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};
`;

export const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 50px #000;
  max-width: 100vw;
  max-height: 95vh;
  overflow: auto;
`;
