import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

const MenuItem = ({ headerSearch, setHeaderSearch }) => {
  const [inputAsctive, setInputActive] = useState(headerSearch === '' ? false : true);

  const handlerInputFocus = () => {
    setInputActive(true);
  };

  const handlerInputBlur = () => {
    if (headerSearch === '') {
      setInputActive(false);
    }
  };

  const handleChange = (e) => {
    setHeaderSearch(e.target.value);
  };

  return (
    <Container>
      <Logo src="/assets/logo.png"></Logo>
      <SearchInput
        type="text"
        value={headerSearch}
        onChange={handleChange}
        isactive={inputAsctive}
        placeholder="Digite um produto...."
        onFocus={handlerInputFocus}
        onBlur={handlerInputBlur}
      />
    </Container>
  );
};

MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
