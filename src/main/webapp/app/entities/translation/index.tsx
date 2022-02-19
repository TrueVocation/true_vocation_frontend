import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Translation from './translation';
import TranslationDetail from './translation-detail';
import TranslationUpdate from './translation-update';
import TranslationDeleteDialog from './translation-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TranslationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TranslationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TranslationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Translation} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TranslationDeleteDialog} />
  </>
);

export default Routes;
