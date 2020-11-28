import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box; 
}

*, *:before, *:after {
  box-sizing: border-box;
}

html {
  color: ${({ theme }) => theme.colors.black};
}

body {
  width: calc(100vw - (100vw - 100%));
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  font-weight: normal;
  margin: 0;
}

button {
  font-family: ${({ theme }) => theme.fonts.ubuntu};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.normal};;
  letter-spacing: 0.04rem;

  &:focus {
    outline: none;
  }
}

a {
  text-decoration: none;

  &:visited {
    color: inherit;
  }
}
`;
