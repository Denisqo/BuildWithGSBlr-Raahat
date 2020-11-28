import React from 'react';
import styled from 'styled-components';

const EnabledButton = styled.button<{ primary: boolean }>`
  background: ${({ primary, theme }) => (primary ? theme.colors.green : theme.colors.transparent)};
  border: ${({ primary, theme }) => (primary ? 'none' : 'solid 1px ' + theme.colors.green)};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ primary, theme }) => (primary ? theme.colors.greenLight : theme.colors.greenTransparent)};
  }

  &:active {
    background: ${({ theme }) => theme.colors.green};
  }
`;

const DisabledButton = styled.button<{ primary: boolean }>`
  background: ${({ primary, theme }) => (primary ? theme.colors.grayLight : theme.colors.transparent)};
  border: ${({ primary, theme }) => (primary ? 'none' : 'solid 1px ' + theme.colors.gray)};
  color: ${({ primary, theme }) => (primary ? theme.colors.white : theme.colors.gray)};
  padding: 10px 20px;
  border-radius: 4px;
  cursor: not-allowed;
`;

interface Props {
  primary: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  if (props.disabled || !props.onClick) {
    return <DisabledButton primary={props.primary}>{props.children}</DisabledButton>;
  }

  return (
    <EnabledButton onClick={props.onClick} primary={props.primary}>
      {props.children}
    </EnabledButton>
  );
};

export default Button;
