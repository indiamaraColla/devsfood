import React from 'react';
import { HeadlineText } from './styles';

const Headline = ({ text, active, size, textalign, onPress }) => {
  return (
    <HeadlineText isActive={active} size={size} textalign={textalign} onPress={onPress}>
      {text}
    </HeadlineText>
  );
};

export default Headline;
