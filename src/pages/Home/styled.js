import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
`;
export const CategoryArea = styled.div`
  color: #551a8b;
  margin-top: 20px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;
`;

export const CategoryList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CategorProductAreayList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ProductArea = styled.div`
  margin: 20px 0 10px 0;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

export const ProductPaginationArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const ProductPaginationItem = styled.div`
  background-color: ${(props) => (props.active === props.current ? '#551a8b' : '#fff')};
  color: ${(props) => (props.active === props.current ? '#fff' : '#551a8b')};
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  margin-right: 10px;
`;
