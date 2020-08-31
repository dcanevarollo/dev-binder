import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Navbar />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>

    <GlobalStyle />
  </ThemeProvider>
);

export default App;
