import { IAnswer } from 'app/shared/model/answer.model';
import { IAnswerUser } from 'app/shared/model/answer-user.model';
import { IProfTest } from 'app/shared/model/prof-test.model';

export interface IQuestion {
  id?: number;
  question?: string | null;
  answers?: IAnswer[] | null;
  answerUser?: IAnswerUser | null;
  profTest?: IProfTest | null;
}

export const defaultValue: Readonly<IQuestion> = {};
