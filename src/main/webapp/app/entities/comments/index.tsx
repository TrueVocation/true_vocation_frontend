import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Comments from './comments';
import CommentsDetail from './comments-detail';
import CommentsUpdate from './comments-update';
import CommentsDeleteDialog from './comments-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommentsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommentsUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommentsDetail} />
      <ErrorBoundaryRoute path={match.url} component={Comments} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CommentsDeleteDialog} />
  </>
);

export default Routes;
