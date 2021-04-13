import React from 'react';
import { ParagraphText } from './styles';

const Paragraph = ({ text, active, fontWeight }) => {
  return (
    <ParagraphText isActive={active} fontWeight={fontWeight}>
      {text}
    </ParagraphText>
  );
};

export default Paragraph;
