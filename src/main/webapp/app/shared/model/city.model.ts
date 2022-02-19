import { IDemandProfessionCity } from 'app/shared/model/demand-profession-city.model';
import { ISchool } from 'app/shared/model/school.model';
import { IUniversity } from 'app/shared/model/university.model';
import { ICourse } from 'app/shared/model/course.model';

export interface ICity {
  id?: number;
  name?: string | null;
  demandProfessionCities?: IDemandProfessionCity[] | null;
  schools?: ISchool[] | null;
  universities?: IUniversity[] | null;
  courses?: ICourse[] | null;
}

export const defaultValue: Readonly<ICity> = {};
