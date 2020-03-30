import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from 'theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from 'components/TopBar';


const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <TopBar />
    <div>this is the transMonitor application</div>
  </ThemeProvider>
);


export default App;
