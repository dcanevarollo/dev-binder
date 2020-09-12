import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ThemeProvider as MuiProvider } from '@material-ui/styles';

import GlobalStyle from './styles/global';
import { styledTheme, muiTheme } from './styles/theme';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <StyledProvider theme={styledTheme}>
    <MuiProvider theme={muiTheme}>
      <AuthProvider>
        <Navbar />

        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>

      <GlobalStyle />
    </MuiProvider>
  </StyledProvider>
);

export default App;
