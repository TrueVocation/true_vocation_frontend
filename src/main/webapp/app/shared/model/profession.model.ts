import { IDemandProfessionCity } from 'app/shared/model/demand-profession-city.model';
import { IRecommendation } from 'app/shared/model/recommendation.model';
import { ICourse } from 'app/shared/model/course.model';
import { ISpecialty } from 'app/shared/model/specialty.model';

export interface IProfession {
  id?: number;
  name?: string | null;
  description?: string | null;
  employability?: string | null;
  averageSalary?: number | null;
  picture?: string | null;
  demandProfessionCities?: IDemandProfessionCity[] | null;
  recommendations?: IRecommendation[] | null;
  courses?: ICourse[] | null;
  specialties?: ISpecialty[] | null;
}

export const defaultValue: Readonly<IProfession> = {};
