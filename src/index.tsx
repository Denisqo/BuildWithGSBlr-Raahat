import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './components/common/typescript/state/Store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/common/typescript/theme/GlobalStyle';
import theme from './components/common/typescript/theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
