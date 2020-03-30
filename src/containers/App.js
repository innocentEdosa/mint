import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from 'theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from 'components/TopBar';
import DashboardLayout from 'components/Layouts';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <TopBar />
    <DashboardLayout />
  </ThemeProvider>
);


export default App;
