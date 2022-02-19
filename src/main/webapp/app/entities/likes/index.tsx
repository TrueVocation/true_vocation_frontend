import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Likes from './likes';
import LikesDetail from './likes-detail';
import LikesUpdate from './likes-update';
import LikesDeleteDialog from './likes-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={LikesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={LikesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={LikesDetail} />
      <ErrorBoundaryRoute path={match.url} component={Likes} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={LikesDeleteDialog} />
  </>
);

export default Routes;
