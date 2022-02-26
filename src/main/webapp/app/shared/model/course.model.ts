import { IContact } from 'app/shared/model/contact.model';
import { IPictures } from 'app/shared/model/pictures.model';
import { ICity } from 'app/shared/model/city.model';
import { IProfession } from 'app/shared/model/profession.model';

export interface ICourse {
  id?: number;
  name?: string | null;
  description?: string | null;
  picture?: string | null;
  contacts?: IContact[] | null;
  pictures?: IPictures[] | null;
  city?: ICity | null;
  professions?: IProfession[] | null;
}

export const defaultValue: Readonly<ICourse> = {};
