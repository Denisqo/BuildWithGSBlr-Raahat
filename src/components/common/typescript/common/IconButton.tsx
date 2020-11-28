import React from 'react';
import styled from 'styled-components';

const Container = styled.button<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme, disabled }) => (!disabled ? theme.colors.whiteLight : theme.colors.white)};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grayExtraLight};
  }

  svg {
    width: 100%;
    fill: ${({ theme }) => theme.colors.black};
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

interface Props {
  Icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const IconButton: React.FC<Props> = (props) => {
  const { Icon, onClick, disabled = false } = props;

  const onClickHandle = () => {
    if (disabled) {
      return;
    }

    onClick();
  };

  return (
    <Container tabIndex={0} type="button" onClick={onClickHandle} disabled={disabled}>
      {!disabled && Icon}
    </Container>
  );
};

export default IconButton;
