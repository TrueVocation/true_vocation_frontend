import { IContact } from 'app/shared/model/contact.model';
import { IFavorite } from 'app/shared/model/favorite.model';
import { IComments } from 'app/shared/model/comments.model';
import { IPictures } from 'app/shared/model/pictures.model';
import { IFaculty } from 'app/shared/model/faculty.model';
import { ICity } from 'app/shared/model/city.model';

export interface IUniversity {
  id?: number;
  name?: string | null;
  address?: string | null;
  description?: string | null;
  dormitory?: boolean | null;
  military?: boolean | null;
  status?: string | null;
  code?: string | null;
  logo?: string | null;
  contacts?: IContact[] | null;
  favorites?: IFavorite[] | null;
  comments?: IComments[] | null;
  pictures?: IPictures[] | null;
  faculties?: IFaculty[] | null;
  city?: ICity | null;
}

export const defaultValue: Readonly<IUniversity> = {
  dormitory: false,
  military: false,
};
