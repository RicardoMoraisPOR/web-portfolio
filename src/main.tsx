import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { SecretProvider } from './contexts/SecretsContext.tsx';
import { CustomThemeProvider } from './contexts/CustomThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <SecretProvider>
          <App />
        </SecretProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
