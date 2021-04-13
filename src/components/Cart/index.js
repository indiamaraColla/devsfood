import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../styles/components/Button';

import { BsChevronDown } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import {
  CartArea,
  CartHeader,
  CartBody,
  CartIcon,
  CartText,
  CartDow,
  ProductsArea,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductQtText,
  ProductsItem,
} from './styled';

import {} from './styled';

const MenuItem = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);

  const handleCartClick = () => {
    setShow(!show);
  };

  const handleProductChange = (key, type) => {
    dispatch({
      type: 'CHANGE_PRODUCT',
      payload: {
        key,
        type,
      },
    });
  };

  const handleClickProduct = (e) => {
    e.preventDefault();
  };

  return (
    <CartArea>
      <CartHeader onClick={handleCartClick}>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho ({products.length})</CartText>
        {show && (
          <CartDow>
            <BsChevronDown />
          </CartDow>
        )}
      </CartHeader>
      <CartBody show={show}>
        <ProductsArea>
          {show === true && products.length === 0 && (
            <ProductsItem>
              <ProductInfoArea>
                <ProductName>Nenhum produto adicionado ao seu carrinho</ProductName>
              </ProductInfoArea>
            </ProductsItem>
          )}

          {products.map((item, index) => (
            <ProductsItem key={index}>
              <ProductPhoto src={item.image} />
              <ProductInfoArea>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
              </ProductInfoArea>
              <ProductQuantity>
                <BiMinus onClick={() => handleProductChange(index, '-')} />
                <ProductQtText>{item.count}</ProductQtText>
                <AiOutlinePlus onClick={() => handleProductChange(index, '+')} />
              </ProductQuantity>
            </ProductsItem>
          ))}

          {show === true && products.length !== 0 && (
            <ProductsItem>
              <Button size="big" type="submit" onClick={handleClickProduct}>
                Finalizar pedido
              </Button>
            </ProductsItem>
          )}
        </ProductsArea>
      </CartBody>
    </CartArea>
  );
};

export default MenuItem;
