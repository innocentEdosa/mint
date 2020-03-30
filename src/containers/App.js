// import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import theme from 'theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from 'components/TopBar';
import routes from 'fixtures/routes';
import DashboardContainer from 'containers/DashboardContainer';


const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <TopBar />
    <Switch>
      <Redirect exact from="/" to={routes.dashboard} />
      <Route path={routes.dashboard} component={DashboardContainer} />
    </Switch>
  </ThemeProvider>
);


export default App;
