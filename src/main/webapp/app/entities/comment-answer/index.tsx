import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommentAnswer from './comment-answer';
import CommentAnswerDetail from './comment-answer-detail';
import CommentAnswerUpdate from './comment-answer-update';
import CommentAnswerDeleteDialog from './comment-answer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommentAnswerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommentAnswerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommentAnswerDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommentAnswer} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CommentAnswerDeleteDialog} />
  </>
);

export default Routes;
