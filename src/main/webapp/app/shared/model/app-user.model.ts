import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { IComments } from 'app/shared/model/comments.model';
import { IFavorite } from 'app/shared/model/favorite.model';
import { ICommentAnswer } from 'app/shared/model/comment-answer.model';
import { ILikes } from 'app/shared/model/likes.model';
import { IPortfolio } from 'app/shared/model/portfolio.model';
import { ITestResult } from 'app/shared/model/test-result.model';

export interface IAppUser {
  id?: number;
  phoneNumber?: string | null;
  birthdate?: string | null;
  user?: IUser | null;
  comments?: IComments[] | null;
  favorites?: IFavorite[] | null;
  commentAnswers?: ICommentAnswer[] | null;
  likes?: ILikes[] | null;
  portfolio?: IPortfolio | null;
  testResult?: ITestResult | null;
}

export const defaultValue: Readonly<IAppUser> = {};
