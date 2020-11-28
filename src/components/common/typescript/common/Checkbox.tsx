import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Checkmark } from '../icons/checkmark.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxWrapper = styled.div<{ checked: boolean; disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme, checked, disabled }) =>
    disabled ? theme.colors.grayLight : checked ? theme.colors.green : theme.colors.white};
  border: 1px solid ${({ theme, checked }) => (checked ? theme.colors.green : theme.colors.grayLight)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;
`;

const Note = styled.span`
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.black};
  font-weight: normal;
  padding: 0 6px;
`;

interface Props {
  checked: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
  const { checked, onClick, disabled = false, children } = props;

  const onClickHandle = () => {
    if (disabled) {
      return;
    }

    onClick();
  };

  return (
    <Container>
      <CheckboxWrapper checked={checked} onClick={onClickHandle} disabled={disabled}>
        {checked && <Checkmark />}
      </CheckboxWrapper>
      {children && <Note>{children}</Note>}
    </Container>
  );
};

export default Checkbox;
