import React from 'react';
import { Container, CategoryImage } from './styled';

const CategoryItem = ({ data, activeCategory, setAtctiveCategory }) => {
  const handleCategoryClick = () => {
    setAtctiveCategory(data.id);
  };

  return (
    <Container
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
      data-tip={data.name}
      data-for="tip-top"
    >
      <CategoryImage src={data.image} />
    </Container>
  );
};

export default CategoryItem;
