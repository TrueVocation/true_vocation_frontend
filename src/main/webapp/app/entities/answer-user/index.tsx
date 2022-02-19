import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import AnswerUser from './answer-user';
import AnswerUserDetail from './answer-user-detail';
import AnswerUserUpdate from './answer-user-update';
import AnswerUserDeleteDialog from './answer-user-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AnswerUserUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AnswerUserUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AnswerUserDetail} />
      <ErrorBoundaryRoute path={match.url} component={AnswerUser} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AnswerUserDeleteDialog} />
  </>
);

export default Routes;
