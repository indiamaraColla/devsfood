import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductName,
  ProductIngredientes,
  ProductQuantityArea,
  ProductQuantity,
  ProductQtText,
  ProductPrice,
  ProductButtons,
  ProductButton,
} from './styled';

const ModalProduct = ({ data, setModalStatus }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [data]);

  const handleCancelButton = () => {
    setModalStatus(false);
  };

  const handleMinusClick = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: { data, count },
    });
    setModalStatus(false);
  };

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductName>{data.name}</ProductName>
            <ProductPrice>R$ {data.price}</ProductPrice>
            <ProductIngredientes>{data.ingredients}</ProductIngredientes>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <div onClick={handleMinusClick}>
                <BiMinus />
              </div>
              <ProductQtText>{count}</ProductQtText>
              <div onClick={handlePlusClick}>
                <AiOutlinePlus />
              </div>
            </ProductQuantity>
            <ProductPrice>R$ {(data.price * count).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={true} onClick={handleCancelButton}>
          Cancelar
        </ProductButton>
        <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
      </ProductButtons>
    </Container>
  );
};

export default ModalProduct;
