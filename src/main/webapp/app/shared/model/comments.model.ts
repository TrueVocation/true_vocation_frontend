import dayjs from 'dayjs';
import { ILikes } from 'app/shared/model/likes.model';
import { ICommentAnswer } from 'app/shared/model/comment-answer.model';
import { IUniversity } from 'app/shared/model/university.model';
import { IAppUser } from 'app/shared/model/app-user.model';
import { IPost } from 'app/shared/model/post.model';

export interface IComments {
  id?: number;
  text?: string | null;
  addedDate?: string | null;
  likes?: ILikes[] | null;
  commentAnswers?: ICommentAnswer[] | null;
  university?: IUniversity | null;
  user?: IAppUser | null;
  post?: IPost | null;
}

export const defaultValue: Readonly<IComments> = {};
