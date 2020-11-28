import React from 'react';
import styled from 'styled-components';

const NavigationTag = styled.span<{ active: boolean }>`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme, active }) => (active ? theme.colors.white : theme.colors.gray)};
  background-color: ${({ theme, active }) => (active ? theme.colors.blue : theme.colors.transparent)};
  padding: 8px 24px;

  font-style: normal;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
`;

interface Props {
  active: boolean;
  onClick: () => void;
}

const NavigationTab: React.FC<Props> = (props) => {
  const { active, onClick, children } = props;
  return (
    <NavigationTag active={active} onClick={onClick}>
      {children}
    </NavigationTag>
  );
};

export default NavigationTab;
