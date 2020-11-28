import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import calendar from '../icons/calendar.png';
import DatePicker from 'react-date-picker';
import _ from 'lodash';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.whiteDark};
  border-radius: 4px;
  overflow: hidden;
  height: 48px;
  display: flex;
`;

const InputField = styled.input<{ dis: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  font-size: ${({ theme }) => theme.fontSize.normal};
  display: ${({ dis }) => (dis ? 'block' : 'none')};
  border: none;
  outline: none;
  background: none;
  position: absolute;

  top: 24px;
  padding: 0;
  width: 100%;
  overflow: visible;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    height: 20px;
    width: 17px;
    background: url(${calendar});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: -12px;
    right: 0;
  }
`;

const Label = styled.label<{ isActive: boolean }>`
  font-size: ${({ theme, isActive }) => (isActive ? theme.fontSize.extraSmall : theme.fontSize.normal)};
  top: ${({ isActive }) => (isActive ? '8px' : '16px')};
  color: ${({ theme }) => theme.colors.grayLight};
  position: absolute;
  transition: all 0.15s linear;
  user-select: none;
`;

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;

  svg {
    max-width: 40%;
  }
`;

const InputWrapper = styled.div<{ withIcon: boolean }>`
  width: calc(100% - ${({ withIcon }) => (withIcon ? 64 : 32)}px);
  margin-left: ${({ withIcon }) => (withIcon ? 0 : 16)}px;
  position: relative;
`;

interface Props {
  label: string;
  value: any;
  setValue: (s: any) => void;
  type?: 'text' | 'password' | 'email' | 'date';
  required?: boolean;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Input: React.FC<Props> = (props) => {
  const { label, value, setValue, type = 'text', required, Icon } = props;
  const input = useRef<HTMLInputElement>(null);
  const [display, setDisplay] = useState(false);

  const onClick = () => {
    setDisplay(true);
  };

  const onBlur = () => {
    if (_.isNil(value)) {
      setDisplay(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (input.current && display) {
      input.current.focus();
    }
  }, [display]);

  return (
    <Container onClick={onClick}>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      <InputWrapper withIcon={!!Icon}>
        <Label htmlFor={label} isActive={display}>
          {label + (required ? '*' : '')}
        </Label>
        <InputField
          ref={input}
          name={label}
          type={type}
          dis={display}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          required={required}
          // date-format={type === 'date' ? 'dd/mm/yyyy' : undefined}
        />
        <DatePicker onChange={setValue} value={value} />
      </InputWrapper>
    </Container>
  );
};

export default Input;
