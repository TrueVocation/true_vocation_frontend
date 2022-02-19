import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import School from './school';
import SchoolDetail from './school-detail';
import SchoolUpdate from './school-update';
import SchoolDeleteDialog from './school-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SchoolUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SchoolUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SchoolDetail} />
      <ErrorBoundaryRoute path={match.url} component={School} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SchoolDeleteDialog} />
  </>
);

export default Routes;
