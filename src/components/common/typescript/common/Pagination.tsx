import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import { numberFromRange } from '../utilities/utilities';

const Container = styled.div`
  user-select: none;
  display: flex;
`;

const Page = styled.div<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme, selected }) => (selected ? theme.colors.blue : theme.colors.gray)};
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  margin: 5px;
`;

const ArrowWrapper = styled.div<{ active: boolean; rotate: number }>`
  transform: rotate(${({ rotate }) => rotate}deg);
  cursor: ${({ active }) => (active ? 'pointer' : 'auto')};
  display: flex;
  align-items: center;
  margin: 0 10px;

  svg {
    fill: ${({ theme, active }) => (active ? theme.colors.gray : theme.colors.grayLight)};
    stroke: ${({ theme, active }) => (active ? theme.colors.gray : theme.colors.grayLight)};
  }
`;

interface Props {
  max: number;
  count: number;
  page: number;
  setPage: (n: number) => void;
}

const Pagination: React.FC<Props> = ({ page, setPage, count, max }) => {
  const [offset, setOffset] = useState(0);
  let pages = Array.from(Array(count).keys());
  const middle = Math.ceil(max / 2) - 1;
  pages = pages.map((n) => n + offset);
  pages = pages.slice(0, max);

  const selectPage = (n: number) => {
    n = numberFromRange(n, 0, count - 1);

    if (max % 2 === 0 && n > offset + middle) {
      // In case if number of displayed pages is even.
      setOffset(numberFromRange(n - middle - 1, 0, count - max));
    } else {
      setOffset(numberFromRange(n - middle, 0, count - max));
    }

    setPage(n);
  };

  return (
    <Container>
      <ArrowWrapper active={page !== 0} onClick={() => selectPage(page - 1)} rotate={0}>
        <Arrow />
      </ArrowWrapper>
      {pages.map((n) => (
        <Page key={n} onClick={() => selectPage(n)} selected={n === page}>
          {n + 1}
        </Page>
      ))}
      <ArrowWrapper active={page !== count - 1} onClick={() => selectPage(page + 1)} rotate={180}>
        <Arrow />
      </ArrowWrapper>
    </Container>
  );
};

export default Pagination;
