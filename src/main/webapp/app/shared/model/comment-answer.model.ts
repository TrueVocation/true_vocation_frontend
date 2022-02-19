import dayjs from 'dayjs';
import { IComments } from 'app/shared/model/comments.model';
import { IAppUser } from 'app/shared/model/app-user.model';

export interface ICommentAnswer {
  id?: number;
  text?: string | null;
  addedDate?: string | null;
  comment?: IComments | null;
  user?: IAppUser | null;
}

export const defaultValue: Readonly<ICommentAnswer> = {};
