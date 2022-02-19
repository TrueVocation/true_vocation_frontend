import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import ProfTest from './prof-test';
import ProfTestDetail from './prof-test-detail';
import ProfTestUpdate from './prof-test-update';
import ProfTestDeleteDialog from './prof-test-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ProfTestUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ProfTestUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ProfTestDetail} />
      <ErrorBoundaryRoute path={match.url} component={ProfTest} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ProfTestDeleteDialog} />
  </>
);

export default Routes;
