import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const theme = {
  colors: {
    white: '#fff',
    darkTeal: '#007c85',
    teal: '#0096a0',
    lightGrey: '#DFDFDF',
    red: '#e50000',
  },
  radii: {
    sm: '4px',
    md: '10px',
    lg: '70px',
  },
  spacing: value => `${value * 4}px`,
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
