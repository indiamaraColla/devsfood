import styled from 'styled-components';

export const LinkArea = styled.a`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? '#68228B' : '')};
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: auto;
`;
