import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import City from './city';
import Favorite from './favorite';
import Faculty from './faculty';
import Specialty from './specialty';
import University from './university';
import Translation from './translation';
import DemandProfessionCity from './demand-profession-city';
import Profession from './profession';
import Contact from './contact';
import Subject from './subject';
import Likes from './likes';
import Comments from './comments';
import CommentAnswer from './comment-answer';
import Post from './post';
import Course from './course';
import School from './school';
import Portfolio from './portfolio';
import Language from './language';
import Achievement from './achievement';
import ProfTest from './prof-test';
import Question from './question';
import Answer from './answer';
import TestResult from './test-result';
import Recommendation from './recommendation';
import AnswerUser from './answer-user';
import AppUser from './app-user';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}city`} component={City} />
      <ErrorBoundaryRoute path={`${match.url}favorite`} component={Favorite} />
      <ErrorBoundaryRoute path={`${match.url}faculty`} component={Faculty} />
      <ErrorBoundaryRoute path={`${match.url}specialty`} component={Specialty} />
      <ErrorBoundaryRoute path={`${match.url}university`} component={University} />
      <ErrorBoundaryRoute path={`${match.url}translation`} component={Translation} />
      <ErrorBoundaryRoute path={`${match.url}demand-profession-city`} component={DemandProfessionCity} />
      <ErrorBoundaryRoute path={`${match.url}profession`} component={Profession} />
      <ErrorBoundaryRoute path={`${match.url}contact`} component={Contact} />
      <ErrorBoundaryRoute path={`${match.url}subject`} component={Subject} />
      <ErrorBoundaryRoute path={`${match.url}likes`} component={Likes} />
      <ErrorBoundaryRoute path={`${match.url}comments`} component={Comments} />
      <ErrorBoundaryRoute path={`${match.url}comment-answer`} component={CommentAnswer} />
      <ErrorBoundaryRoute path={`${match.url}post`} component={Post} />
      <ErrorBoundaryRoute path={`${match.url}course`} component={Course} />
      <ErrorBoundaryRoute path={`${match.url}school`} component={School} />
      <ErrorBoundaryRoute path={`${match.url}portfolio`} component={Portfolio} />
      <ErrorBoundaryRoute path={`${match.url}language`} component={Language} />
      <ErrorBoundaryRoute path={`${match.url}achievement`} component={Achievement} />
      <ErrorBoundaryRoute path={`${match.url}prof-test`} component={ProfTest} />
      <ErrorBoundaryRoute path={`${match.url}question`} component={Question} />
      <ErrorBoundaryRoute path={`${match.url}answer`} component={Answer} />
      <ErrorBoundaryRoute path={`${match.url}test-result`} component={TestResult} />
      <ErrorBoundaryRoute path={`${match.url}recommendation`} component={Recommendation} />
      <ErrorBoundaryRoute path={`${match.url}answer-user`} component={AnswerUser} />
      <ErrorBoundaryRoute path={`${match.url}app-user`} component={AppUser} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
