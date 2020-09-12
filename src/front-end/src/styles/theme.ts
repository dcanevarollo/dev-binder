import { createMuiTheme } from '@material-ui/core/styles';

export const styledTheme = {
  colors: {
    background: '#2B2B2B',
    text: '#E5E5E5',
    primary: '#9C27B0',
    accent: '#69F0AE',
  },
};

export const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: styledTheme.colors.primary,
    },
    secondary: {
      main: styledTheme.colors.accent,
    },
  },
});
