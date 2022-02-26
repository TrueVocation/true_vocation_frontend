import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Pictures from './pictures';
import PicturesDetail from './pictures-detail';
import PicturesUpdate from './pictures-update';
import PicturesDeleteDialog from './pictures-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={PicturesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={PicturesUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={PicturesDetail} />
      <ErrorBoundaryRoute path={match.url} component={Pictures} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={PicturesDeleteDialog} />
  </>
);

export default Routes;
