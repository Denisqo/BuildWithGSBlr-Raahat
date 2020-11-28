import React from 'react';
import styled from 'styled-components';

const Tag = styled.span<{ color?: string; backgroundColor?: string }>`
  font-size: ${({ theme }) => theme.fontSize.extraSmall};
  font-weight: bold;
  color: ${({ theme, color }) => (color ? color : theme.colors.gray)};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.grayExtraLight};
  padding: 8px 12px;

  display: flex;
  font-style: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 16px;
`;

interface Props {
  color?: string;
  backgroundColor?: string;
}

const Label: React.FC<Props> = (props) => {
  return <Tag {...props}>{props.children}</Tag>;
};

export default Label;
