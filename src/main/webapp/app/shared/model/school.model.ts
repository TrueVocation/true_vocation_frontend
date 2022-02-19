import { ICity } from 'app/shared/model/city.model';
import { IPortfolio } from 'app/shared/model/portfolio.model';

export interface ISchool {
  id?: number;
  name?: string | null;
  number?: number | null;
  city?: ICity | null;
  portfolios?: IPortfolio[] | null;
}

export const defaultValue: Readonly<ISchool> = {};
