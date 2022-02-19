import { ISubject } from 'app/shared/model/subject.model';
import { IProfession } from 'app/shared/model/profession.model';
import { IFaculty } from 'app/shared/model/faculty.model';

export interface ISpecialty {
  id?: number;
  name?: string | null;
  description?: string | null;
  totalGrants?: number | null;
  minScoreGeneral?: number | null;
  minScoreQuota?: number | null;
  picture?: string | null;
  subjects?: ISubject[] | null;
  professions?: IProfession[] | null;
  faculty?: IFaculty | null;
}

export const defaultValue: Readonly<ISpecialty> = {};
