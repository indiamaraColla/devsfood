import styled, { css } from 'styled-components';

export const CartArea = styled.div`
  background-color: #551a8b;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  bottom: 0;
  right: 20px;
  color: #fff;
`;

export const CartHeader = styled.div`
  min-width: 290px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 23px;
  height: auto;
  margin: 0 10px;
`;

export const CartText = styled.h4`
  color: #fff;
  font-size: 17px;
  flex: 1;
`;

export const CartDow = styled.h4`
  color: #fff;
  font-size: 25px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartBody = styled.div`
  ${(props) =>
    props.show
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`;

export const ProductsArea = styled.div``;
export const ProductsItem = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;

  button {
    margin-top: 20px;
    width: 100%;
  }
`;

export const ProductPhotoArea = styled.div`
  width: 100px;
`;

export const ProductPhoto = styled.img`
  width: 64px;
  height: auto;
  border-radius: 4px;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 12px;
`;

export const ProductQuantityArea = styled.div``;
export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 6px;
  color: #551a8b;
  margin-left: 8px;

  & svg {
    cursor: pointer;
  }
`;

export const ProductQtText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin: 0 4px;
`;
