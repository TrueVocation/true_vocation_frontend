import dayjs from 'dayjs';
import { ILikes } from 'app/shared/model/likes.model';
import { IFavorite } from 'app/shared/model/favorite.model';
import { IComments } from 'app/shared/model/comments.model';

export interface IPost {
  id?: number;
  title?: string | null;
  shortDescription?: string | null;
  description?: string | null;
  picture?: string | null;
  createdDate?: string | null;
  likes?: ILikes[] | null;
  favorites?: IFavorite[] | null;
  comments?: IComments[] | null;
}

export const defaultValue: Readonly<IPost> = {};
