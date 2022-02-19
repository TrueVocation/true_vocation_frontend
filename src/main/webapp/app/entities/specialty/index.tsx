import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Specialty from './specialty';
import SpecialtyDetail from './specialty-detail';
import SpecialtyUpdate from './specialty-update';
import SpecialtyDeleteDialog from './specialty-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SpecialtyUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SpecialtyUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SpecialtyDetail} />
      <ErrorBoundaryRoute path={match.url} component={Specialty} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={SpecialtyDeleteDialog} />
  </>
);

export default Routes;
