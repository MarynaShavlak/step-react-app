import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from './src/components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = Object.freeze({
  colors: {
    lightGrey: '#F7F7F7',
    darkGrey: '#545454',
    white: '#ffffff',
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
