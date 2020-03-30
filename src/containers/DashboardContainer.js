import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import DashboardLayout from 'components/Layouts';
import React from 'react';
import routes from 'fixtures/routes';
import OverviewContainer from 'containers/OverviewContainer';

const DashboardContainer = () => (
  <DashboardLayout>
    <Switch>
      <Redirect exact from={routes.dashboard} to={routes.overview} />
      <Route exact path={routes.overview} component={OverviewContainer} />
    </Switch>
  </DashboardLayout>
);

export default DashboardContainer;
