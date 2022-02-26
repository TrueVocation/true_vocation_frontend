import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale from './locale';
import authentication from './authentication';
import applicationProfile from './application-profile';

import administration from 'app/modules/administration/administration.reducer';
import userManagement from 'app/modules/administration/user-management/user-management.reducer';
import register from 'app/modules/account/register/register.reducer';
import activate from 'app/modules/account/activate/activate.reducer';
import password from 'app/modules/account/password/password.reducer';
import settings from 'app/modules/account/settings/settings.reducer';
import passwordReset from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import city from 'app/entities/city/city.reducer';
// prettier-ignore
import favorite from 'app/entities/favorite/favorite.reducer';
// prettier-ignore
import faculty from 'app/entities/faculty/faculty.reducer';
// prettier-ignore
import specialty from 'app/entities/specialty/specialty.reducer';
// prettier-ignore
import university from 'app/entities/university/university.reducer';
// prettier-ignore
import translation from 'app/entities/translation/translation.reducer';
// prettier-ignore
import demandProfessionCity from 'app/entities/demand-profession-city/demand-profession-city.reducer';
// prettier-ignore
import profession from 'app/entities/profession/profession.reducer';
// prettier-ignore
import contact from 'app/entities/contact/contact.reducer';
// prettier-ignore
import subject from 'app/entities/subject/subject.reducer';
// prettier-ignore
import likes from 'app/entities/likes/likes.reducer';
// prettier-ignore
import comments from 'app/entities/comments/comments.reducer';
// prettier-ignore
import commentAnswer from 'app/entities/comment-answer/comment-answer.reducer';
// prettier-ignore
import post from 'app/entities/post/post.reducer';
// prettier-ignore
import course from 'app/entities/course/course.reducer';
// prettier-ignore
import school from 'app/entities/school/school.reducer';
// prettier-ignore
import portfolio from 'app/entities/portfolio/portfolio.reducer';
// prettier-ignore
import language from 'app/entities/language/language.reducer';
// prettier-ignore
import achievement from 'app/entities/achievement/achievement.reducer';
// prettier-ignore
import profTest from 'app/entities/prof-test/prof-test.reducer';
// prettier-ignore
import question from 'app/entities/question/question.reducer';
// prettier-ignore
import answer from 'app/entities/answer/answer.reducer';
// prettier-ignore
import testResult from 'app/entities/test-result/test-result.reducer';
// prettier-ignore
import recommendation from 'app/entities/recommendation/recommendation.reducer';
// prettier-ignore
import answerUser from 'app/entities/answer-user/answer-user.reducer';
// prettier-ignore
import appUser from 'app/entities/app-user/app-user.reducer';
// prettier-ignore
import pictures from 'app/entities/pictures/pictures.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer = {
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  city,
  favorite,
  faculty,
  specialty,
  university,
  translation,
  demandProfessionCity,
  profession,
  contact,
  subject,
  likes,
  comments,
  commentAnswer,
  post,
  course,
  school,
  portfolio,
  language,
  achievement,
  profTest,
  question,
  answer,
  testResult,
  recommendation,
  answerUser,
  appUser,
  pictures,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
};

export default rootReducer;
