import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};

const colors = {
  default: css`
    background-color: #9400d3;

    &:hover {
      background-color: #9400d3cc;
    }
  `,
  danger: css`
    background-color: #e04848;

    &:hover {
      background-color: #a43d3d;
    }
  `,
  gray: css`
    background-color: #b9bbbe;
    color: #666;

    &:hover {
      background-color: #999;
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background-color: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;

  ${(props) => sizes[props.size || 'default']}
  ${(props) => colors[props.colors || 'default']}
  
  ${(props) =>
    colors[
      props.filled === false &&
        css`
          background: none;

          &:hover {
            background: none;
            opacity: 0.6;
          }
        `
    ]}
`;

export default Button;
