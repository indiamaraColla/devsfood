import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #551a8b;
`;

export const ProductPhotoArea = styled.div`
  width: 100px;
`;

export const ProductPhoto = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin: 0 10px;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #551a8b;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
`;

export const ProductIngredientes = styled.div`
  font-size: 11px;
`;

export const ProductButtonArea = styled.div`
  font-size: 30px;
`;
