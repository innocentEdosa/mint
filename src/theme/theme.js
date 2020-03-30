import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1875F0',
    },
    secondary: {
      main: '#ffc107',
    },
    aux: {
      light: '#fff',
      lightShade2: '#F7F8FA',
      lightShade3: '#EAEEF0',
      lightShade4: '#CCCFD4',
    },
    text: {
      main: '#647787',
      dark: '#000',
      darkShade1: '#4F4F4F',
      secondary: '#262626',
      secondaryShade2: '#414042',
      secondaryShade3: '#7F8FA4',
      secondaryShade4: '#647787',
      light: '#fff',
    },
    button: {
      special: '#27AE60',
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Roboto',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [{
          fontFamily: 'Segoe UI',
        },
        ],
      },
    },
  },
});

export default theme;
