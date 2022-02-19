import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import DemandProfessionCity from './demand-profession-city';
import DemandProfessionCityDetail from './demand-profession-city-detail';
import DemandProfessionCityUpdate from './demand-profession-city-update';
import DemandProfessionCityDeleteDialog from './demand-profession-city-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DemandProfessionCityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DemandProfessionCityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DemandProfessionCityDetail} />
      <ErrorBoundaryRoute path={match.url} component={DemandProfessionCity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DemandProfessionCityDeleteDialog} />
  </>
);

export default Routes;
