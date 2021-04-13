import styled, { css } from 'styled-components/native';
import { fonts } from '../Helpers/constants';

// const TextDefault = styled.p`
//   font-family: ${fonts.productSans};
// `;

export const HeadlineText = styled.h1`
  font-family: ${fonts.playfairDisplay};
`;

// export const SubheadingText = styled.h2`

//   font-family: ${fonts.playfairDisplay};

// `;

// export const ParagraphText = styled(TextDefault)`
//   font-size: 19px;
//   color: #fff;
//   font-family: ${fonts.productSans};
//   font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
//   ${(props) =>
//     props.isActive &&
//     css`
//       color: #42e4ce;
//     `}
// `;

// export const TextDescription = styled(TextDefault)`
//   font-family: ${fonts.productSans};
//   font-size: ${(props) => (props.size ? props.size : 14)}px;
//   color: ${(props) => (props.primary ? '#848484' : '#fff')};
//   margin: ${(props) => (props.margin ? props.margin : '0')}px;
//   text-align: left;

//   ${(props) =>
//     props.isActive &&
//     css`
//       color: #42e4ce;
//     `}
//   ${(props) =>
//     props.textalign &&
//     css`
//       text-align: center;
//     `}
// `;
