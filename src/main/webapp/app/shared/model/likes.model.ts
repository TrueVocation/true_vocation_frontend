import { IComments } from 'app/shared/model/comments.model';
import { IAppUser } from 'app/shared/model/app-user.model';
import { IPost } from 'app/shared/model/post.model';

export interface ILikes {
  id?: number;
  comment?: IComments | null;
  user?: IAppUser | null;
  post?: IPost | null;
}

export const defaultValue: Readonly<ILikes> = {};
