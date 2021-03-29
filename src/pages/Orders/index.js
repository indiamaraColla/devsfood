import React, { useState } from 'react';
import Header from '../../components/Header';
import db from '../../mocksJson/_prodtsOrders.json';

import { Container, OrdersArea, OrdersDay, OrdersData, OrdersItem } from './styles';

const Orders = () => {
  const [headerSearch, setHeaderSearch] = useState('');

  const ordersItem = db.prodsOrders;

  return (
    <Container>
      <Header headerSearch={headerSearch} setHeaderSearch={setHeaderSearch} />
      <OrdersArea>
        <h1>MEUS PEDIDOS</h1>
        UHUL! você tem {ordersItem.quantityProducts} pedido no devsFood!
        {ordersItem.list.map((item, index) => {
          return (
            <OrdersItem key={index}>
              <OrdersDay>
                <span>{item.data}</span>
                <span>{item.status}</span>
              </OrdersDay>
              <OrdersData>
                <div>
                  <p>Número do {item.numberOrder}</p>

                  <span>
                    {item.address}, número {item.addressNumber}, {item.neighborhood}, {item.city}
                  </span>
                </div>
                <span>R$ {item.totalPrice}</span>
              </OrdersData>
            </OrdersItem>
          );
        })}
      </OrdersArea>
    </Container>
  );
};

export default Orders;
