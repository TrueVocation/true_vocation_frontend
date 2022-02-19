import { IUniversity } from 'app/shared/model/university.model';
import { IAppUser } from 'app/shared/model/app-user.model';
import { IPost } from 'app/shared/model/post.model';

export interface IFavorite {
  id?: number;
  type?: string | null;
  university?: IUniversity | null;
  user?: IAppUser | null;
  post?: IPost | null;
}

export const defaultValue: Readonly<IFavorite> = {};
