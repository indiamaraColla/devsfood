import React, { useState, useEffect } from 'react';
import api from '../../Utils/api';

import Header from '../../components/Header';
import HeaderSearch from '../../components/HeaderSearch';
import Cart from '../../components/Cart';

import { Container, PageBody } from '../../AppStyled.js/styled';

import { ContainerArea, OrdersArea, OrdersDay, OrdersData, OrdersItem } from './styles';

const Orders = () => {
  const [headerSearch, setHeaderSearch] = useState('');

  const [order, setOrder] = useState([]);

  useEffect(() => {
    api.post('/orders').then((response) => {
      setOrder(response.data.finishOrders.result);
    });
  }, []);

  return (
    <Container>
      <Header />
      <PageBody>
        <ContainerArea>
          <HeaderSearch headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} />
          <OrdersArea>
            <h1>MEUS PEDIDOS</h1>
            UHUL! você tem {order.quantityProducts} pedido no devsFood!
            {order.map((item, index) => {
              return (
                <OrdersItem key={index}>
                  <OrdersDay>
                    <div>
                      <span>{item.data}</span>
                      <p>Número do {item.numberOrder}</p>
                    </div>
                    <span>R$ {item.totalPrice.toFixed(2)}</span>
                  </OrdersDay>
                  <OrdersData>
                    <span>{item.status}</span>

                    <span>
                      {item.address}, número {item.addressNumber}, {item.neighborhood}, {item.city}
                    </span>
                  </OrdersData>
                </OrdersItem>
              );
            })}
          </OrdersArea>
        </ContainerArea>
      </PageBody>
      <Cart />
    </Container>
  );
};

export default Orders;
