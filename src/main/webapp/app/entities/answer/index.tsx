import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Answer from './answer';
import AnswerDetail from './answer-detail';
import AnswerUpdate from './answer-update';
import AnswerDeleteDialog from './answer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AnswerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AnswerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AnswerDetail} />
      <ErrorBoundaryRoute path={match.url} component={Answer} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AnswerDeleteDialog} />
  </>
);

export default Routes;
