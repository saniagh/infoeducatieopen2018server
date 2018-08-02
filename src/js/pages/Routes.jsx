import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import StatisticsView from './statistics/StatisticsView.jsx';
import DeleteView from './delete/DeleteView.jsx';
import HomeView from './home/HomeView.jsx';

const Routes = withRouter(() => {
  return <Switch>
    <Route exact path="/" component={HomeView}/>
    <Route exact path={`/:recoveryKey`} component={StatisticsView}/>
    <Route exact path={`/delete/:recoveryKey`} component={DeleteView}/>
  </Switch>;

});

export default Routes;
