import { IProfession } from 'app/shared/model/profession.model';
import { ICity } from 'app/shared/model/city.model';

export interface IDemandProfessionCity {
  id?: number;
  actualInPercent?: number | null;
  profession?: IProfession | null;
  city?: ICity | null;
}

export const defaultValue: Readonly<IDemandProfessionCity> = {};
