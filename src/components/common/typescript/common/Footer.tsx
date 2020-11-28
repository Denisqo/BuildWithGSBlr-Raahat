import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background: ${({ theme }) => theme.colors.whiteDark};
  height: ${({ theme }) => theme.heights.footer};
  color: ${({ theme }) => theme.colors.grayLight};
  letter-spacing: 2px;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer: React.FC = (props) => {
  return <Container>Provide your information here</Container>;
};

export default Footer;
