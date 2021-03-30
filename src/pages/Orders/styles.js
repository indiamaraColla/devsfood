import styled from 'styled-components';

export const ContainerArea = styled.div`
  width: 100%;
  padding: 16px;
`;

export const OrdersArea = styled.div`
  color: #551a8b;
  margin-top: 20px;
  height: auto;
  background-color: #f3f3f3;
  border-radius: 5px;
  padding: 12px;

  h1 {
    margin-bottom: 20px;
  }
`;

export const OrdersDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const OrdersData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrdersItem = styled.div`
  color: #551a8b;
  margin-top: 20px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 12px;

  span {
    display: block;
    line-height: 1.5;
  }
`;
