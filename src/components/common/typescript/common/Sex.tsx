import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Male } from '../icons/male.svg';
import { ReactComponent as Female } from '../icons/female.svg';

const SexWrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

interface Props {
  sex: 'M' | 'F';
}

const Sex: React.FC<Props> = (props) => {
  const { sex } = props;

  return (
    <SexWrapper backgroundColor={sex === 'M' ? 'rgba(43, 92, 219, 0.1)' : 'rgba(234, 62, 196, 0.1)'}>
      {sex === 'M' ? <Male /> : <Female />}
    </SexWrapper>
  );
};

export default Sex;
