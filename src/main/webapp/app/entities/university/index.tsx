import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import University from './university';
import UniversityDetail from './university-detail';
import UniversityUpdate from './university-update';
import UniversityDeleteDialog from './university-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={UniversityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={UniversityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={UniversityDetail} />
      <ErrorBoundaryRoute path={match.url} component={University} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={UniversityDeleteDialog} />
  </>
);

export default Routes;
