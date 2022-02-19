import { IQuestion } from 'app/shared/model/question.model';
import { IAnswer } from 'app/shared/model/answer.model';
import { ITestResult } from 'app/shared/model/test-result.model';

export interface IAnswerUser {
  id?: number;
  question?: IQuestion | null;
  answer?: IAnswer | null;
  testResult?: ITestResult | null;
}

export const defaultValue: Readonly<IAnswerUser> = {};
