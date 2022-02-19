import dayjs from 'dayjs';
import { IPortfolio } from 'app/shared/model/portfolio.model';

export interface IAchievement {
  id?: number;
  name?: string | null;
  type?: string | null;
  receivedDate?: string | null;
  orientation?: string | null;
  portfolio?: IPortfolio | null;
}

export const defaultValue: Readonly<IAchievement> = {};
