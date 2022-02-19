import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Achievement from './achievement';
import AchievementDetail from './achievement-detail';
import AchievementUpdate from './achievement-update';
import AchievementDeleteDialog from './achievement-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AchievementUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AchievementUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AchievementDetail} />
      <ErrorBoundaryRoute path={match.url} component={Achievement} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AchievementDeleteDialog} />
  </>
);

export default Routes;
