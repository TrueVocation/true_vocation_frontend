import { ISpecialty } from 'app/shared/model/specialty.model';

export interface ISubject {
  id?: number;
  name?: string | null;
  picture?: string | null;
  specialties?: ISpecialty[] | null;
}

export const defaultValue: Readonly<ISubject> = {};
