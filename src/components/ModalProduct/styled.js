import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 650px;
  padding: 20px;
`;
export const ProductArea = styled.div`
  height: 200px;
  display: flex;
  color: #9400d3;
`;

export const ProductButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ProductPhoto = styled.img`
  width: 310px;
  border-radius: 12px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 12px;
`;

export const ProductDetails = styled.div`
  width: 100%;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ProductIngredientes = styled.div`
  font-size: 14px;
`;

export const ProductButton = styled.button`
  border: 0;
  background-color: #9400d3;
  box-shadow: 4px 5px 0px #999;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.small
      ? css`
          font-size: 13px;
          padding: 5px 10px;
        `
      : css`
          font-size: 22px;
          padding: 10px 20px;
        `};
`;

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9400d3;
  color: #fff;
  border-radius: 5px;
  padding: 4px;

  & svg {
    height: 30px;
    width: auto;
    cursor: pointer;
  }
`;

export const ProductQtText = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
