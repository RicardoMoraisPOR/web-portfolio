import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { SecretProvider } from './contexts/SecretsContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SecretProvider>
        <App />
      </SecretProvider>
    </BrowserRouter>
  </React.StrictMode>
);
