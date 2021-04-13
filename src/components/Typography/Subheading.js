import React from 'react';
import { SubheadingText } from './styles';

const Subheading = ({ text, active, size, textalign }) => {
  return (
    <SubheadingText isActive={active} size={size} textalign={textalign}>
      {text}
    </SubheadingText>
  );
};

export default Subheading;
