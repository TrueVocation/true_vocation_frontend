import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Recommendation from './recommendation';
import RecommendationDetail from './recommendation-detail';
import RecommendationUpdate from './recommendation-update';
import RecommendationDeleteDialog from './recommendation-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={RecommendationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={RecommendationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={RecommendationDetail} />
      <ErrorBoundaryRoute path={match.url} component={Recommendation} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={RecommendationDeleteDialog} />
  </>
);

export default Routes;
