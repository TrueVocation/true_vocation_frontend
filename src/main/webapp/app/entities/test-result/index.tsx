import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestResult from './test-result';
import TestResultDetail from './test-result-detail';
import TestResultUpdate from './test-result-update';
import TestResultDeleteDialog from './test-result-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestResultUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestResultUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestResultDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestResult} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TestResultDeleteDialog} />
  </>
);

export default Routes;
