import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import StatisticsView from './statistics/StatisticsView.jsx';

const Routes = withRouter(() => {
  return <Switch>
    <Route path={`/:recoveryKey`} component={StatisticsView}/>
  </Switch>;

});

export default Routes;
