import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Faculty from './faculty';
import FacultyDetail from './faculty-detail';
import FacultyUpdate from './faculty-update';
import FacultyDeleteDialog from './faculty-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FacultyUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FacultyUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FacultyDetail} />
      <ErrorBoundaryRoute path={match.url} component={Faculty} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FacultyDeleteDialog} />
  </>
);

export default Routes;
