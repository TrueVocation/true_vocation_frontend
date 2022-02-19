import { IAppUser } from 'app/shared/model/app-user.model';
import { IRecommendation } from 'app/shared/model/recommendation.model';
import { IAnswerUser } from 'app/shared/model/answer-user.model';
import { IProfTest } from 'app/shared/model/prof-test.model';

export interface ITestResult {
  id?: number;
  appUser?: IAppUser | null;
  recommendation?: IRecommendation | null;
  answerUsers?: IAnswerUser[] | null;
  profTest?: IProfTest | null;
}

export const defaultValue: Readonly<ITestResult> = {};
