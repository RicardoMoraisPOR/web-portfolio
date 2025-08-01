import { CustomThemeProvider } from '@contexts/CustomThemeContext.tsx';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CustomThemeProvider>
          <Analytics />
          <App />
        </CustomThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
