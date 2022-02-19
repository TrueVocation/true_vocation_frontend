import { IAnswerUser } from 'app/shared/model/answer-user.model';
import { IQuestion } from 'app/shared/model/question.model';

export interface IAnswer {
  id?: number;
  answer?: string | null;
  answerUser?: IAnswerUser | null;
  questions?: IQuestion[] | null;
}

export const defaultValue: Readonly<IAnswer> = {};
