import { ITestResult } from 'app/shared/model/test-result.model';
import { IProfession } from 'app/shared/model/profession.model';

export interface IRecommendation {
  id?: number;
  testResult?: ITestResult | null;
  profession?: IProfession | null;
}

export const defaultValue: Readonly<IRecommendation> = {};
