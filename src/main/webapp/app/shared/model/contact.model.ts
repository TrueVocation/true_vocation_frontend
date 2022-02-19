import { ICourse } from 'app/shared/model/course.model';
import { IUniversity } from 'app/shared/model/university.model';
import { IPortfolio } from 'app/shared/model/portfolio.model';

export interface IContact {
  id?: number;
  type?: string | null;
  contact?: string | null;
  course?: ICourse | null;
  university?: IUniversity | null;
  portfolio?: IPortfolio | null;
}

export const defaultValue: Readonly<IContact> = {};
