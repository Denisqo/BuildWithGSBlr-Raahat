import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import _ from 'lodash';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SelectWrapper = styled.div<{
  active: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme, error, readOnly }) =>
    error ? theme.colors.redExtraLight : readOnly ? 'none' : theme.colors.whiteLight};
  border: 1px solid
    ${({ theme, error, readOnly }) => (error ? theme.colors.red : readOnly ? 'none' : theme.colors.whiteLight)};
  border-radius: 5px;
  cursor: ${({ disabled, readOnly }) => (disabled ? 'not-allowed' : readOnly ? 'text' : 'pointer')};
  padding: ${({ readOnly }) => (readOnly ? '6px 40px 6px 0' : '6px 40px 6px 14px')};
  min-height: 48px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  svg {
    fill: ${({ theme, active }) => (active ? theme.colors.gray : theme.colors.grayLight)};
    stroke: ${({ theme, active }) => (active ? theme.colors.gray : theme.colors.grayLight)};
  }
`;

const Content = styled.div<{ hasIcon: boolean }>`
  display: flex;
  flex-direction: column;
  padding-left: ${({ hasIcon }) => (hasIcon ? '14px' : 0)};
`;

const Label = styled.div<{ active: boolean; error?: boolean }>`
  font-size: ${({ theme, active }) => (active ? theme.fontSize.extraSmall : theme.fontSize.normal)};
  color: ${({ theme, active, error }) =>
    error ? theme.colors.red : active ? theme.colors.gray : theme.colors.grayLight};
  padding-bottom: 1px;
`;

const Value = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

const ArrowIcon = styled(Arrow)`
  transform: rotate(-90deg);
  position: absolute;
  right: 21px;
`;

const OptionWrapper = styled.div`
  position: absolute;
  top: 52px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 5px;

  animation: fadeIn ease 0.4s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Option = styled.div`
  width: 100%;
  padding: 16px 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayExtraLight};
  font-size: ${({ theme }) => theme.fontSize.normal};
  line-height: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.grayExtraLight};
  }
`;

const Caption = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 16px;
  padding: 1px 0;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.red};
  line-height: 16px;
  padding: 1px 0;
`;

interface Props {
  label: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  values?: Array<string>;
  caption?: string;
  error?: string;
  readOnly?: boolean;
  Icon?: React.ReactNode;
}

const Select: React.FC<Props> = (props) => {
  const { label, selectedValue, setSelectedValue, values, caption, error, readOnly, Icon } = props;

  const [isShown, setIsShown] = useState(false);

  const handleOnClickSelect = () => {
    if (!readOnly && !!values) {
      setIsShown(!isShown);
    }
  };

  const handleOnClickOnOption = (value: string) => {
    setSelectedValue(value);
    setIsShown(!isShown);
  };

  return (
    <Container>
      <SelectWrapper
        tabIndex={0}
        disabled={!values}
        readOnly={readOnly}
        active={!!selectedValue}
        error={!!error}
        onClick={handleOnClickSelect}>
        {Icon}
        <Content hasIcon={!!Icon}>
          <Label active={!!selectedValue} error={!!error}>
            {label}
          </Label>
          <Value>{selectedValue}</Value>
        </Content>
        {!!values && !readOnly && <ArrowIcon />}
      </SelectWrapper>
      {isShown && !readOnly && !!values && (
        <OptionWrapper>
          {_.map(values, (value, i) => (
            <Option key={i} onClick={() => handleOnClickOnOption(value)}>
              {value}
            </Option>
          ))}
        </OptionWrapper>
      )}
      <Caption>{caption}</Caption>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

export default Select;
