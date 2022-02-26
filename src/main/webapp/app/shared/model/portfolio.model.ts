import { IAppUser } from 'app/shared/model/app-user.model';
import { IContact } from 'app/shared/model/contact.model';
import { IAchievement } from 'app/shared/model/achievement.model';
import { IPictures } from 'app/shared/model/pictures.model';
import { ILanguage } from 'app/shared/model/language.model';
import { ISchool } from 'app/shared/model/school.model';

export interface IPortfolio {
  id?: number;
  picture?: string | null;
  gender?: string | null;
  hobby?: string | null;
  aboutMe?: string | null;
  appUser?: IAppUser | null;
  contacts?: IContact[] | null;
  achievements?: IAchievement[] | null;
  pictures?: IPictures[] | null;
  languages?: ILanguage[] | null;
  schools?: ISchool[] | null;
}

export const defaultValue: Readonly<IPortfolio> = {};
