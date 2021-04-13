import React from 'react';
import { TextDescription } from './styles';

const TitleDescription = ({ text, active, size, primary, margin, textalign }) => {
  return (
    <TextDescription isActive={active} size={size} primary={primary} margin={margin} textalign={textalign}>
      {text}
    </TextDescription>
  );
};

export default TitleDescription;
