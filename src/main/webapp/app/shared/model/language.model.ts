import { IPortfolio } from 'app/shared/model/portfolio.model';

export interface ILanguage {
  id?: number;
  language?: string | null;
  level?: string | null;
  portfolios?: IPortfolio[] | null;
}

export const defaultValue: Readonly<ILanguage> = {};
