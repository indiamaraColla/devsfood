import React from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import {
  Container,
  ProductPhotoArea,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductIngredientes,
  ProductButtonArea,
} from './styled';

// import db from './_mock.json';

const ProductItem = ({ data, onClick }) => {
  const handleClick = () => {
    onClick(data);
  };

  return (
    <Container onClick={handleClick}>
      <ProductPhotoArea>
        <ProductPhoto src={data.image} />
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>R$ {data.price}</ProductPrice>
        <ProductIngredientes>{data.ingredients}</ProductIngredientes>
      </ProductInfoArea>
      <ProductButtonArea>
        <FiChevronRight />
      </ProductButtonArea>
    </Container>
  );
};

export default ProductItem;
