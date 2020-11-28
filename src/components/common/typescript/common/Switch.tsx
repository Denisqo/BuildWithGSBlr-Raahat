import React from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Toggle = styled.div`
  margin: 0 6px;
  background: ${({ theme }) => theme.colors.whiteDark};
  height: 16px;
  width: 32px;
  border-radius: 100px;
`;

const Circle = styled.div<{ state: boolean }>`
  transition: all 0.15s linear;
  background: ${({ theme }) => theme.colors.green};
  margin-left: ${({ state }) => (state ? 0 : '16px')};
  border-radius: 100%;
  height: 16px;
  width: 16px;
`;

const Label = styled.div<{ active: boolean }>`
  color: ${({ theme, active }) => (active ? theme.colors.green : theme.colors.gray)};
`;

interface Props {
  leftLabel?: string | React.ReactNode;
  rightLabel?: string | React.ReactNode;
  state: boolean;
  onClick: () => void;
}

const Switch: React.FC<Props> = (props) => {
  return (
    <SwitchWrapper onClick={props.onClick}>
      <Label active={props.state}>{props.leftLabel}</Label>
      <Toggle>
        <Circle state={props.state} />
      </Toggle>
      <Label active={!props.state}>{props.rightLabel}</Label>
    </SwitchWrapper>
  );
};

export default Switch;
