import { ISpecialty } from 'app/shared/model/specialty.model';
import { IUniversity } from 'app/shared/model/university.model';

export interface IFaculty {
  id?: number;
  name?: string | null;
  description?: string | null;
  specialties?: ISpecialty[] | null;
  universities?: IUniversity[] | null;
}

export const defaultValue: Readonly<IFaculty> = {};
