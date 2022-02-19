import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Profession from './profession';
import ProfessionDetail from './profession-detail';
import ProfessionUpdate from './profession-update';
import ProfessionDeleteDialog from './profession-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={ProfessionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={ProfessionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={ProfessionDetail} />
      <ErrorBoundaryRoute path={match.url} component={Profession} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={ProfessionDeleteDialog} />
  </>
);

export default Routes;
