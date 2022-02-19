import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Favorite from './favorite';
import FavoriteDetail from './favorite-detail';
import FavoriteUpdate from './favorite-update';
import FavoriteDeleteDialog from './favorite-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FavoriteUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FavoriteUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FavoriteDetail} />
      <ErrorBoundaryRoute path={match.url} component={Favorite} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FavoriteDeleteDialog} />
  </>
);

export default Routes;
