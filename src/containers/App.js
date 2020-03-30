import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from 'theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from 'components/TopBar';
import SideNav from 'components/SideNav';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <TopBar />
    <SideNav />
    <div>this is the transMonitor application</div>
  </ThemeProvider>
);


export default App;
