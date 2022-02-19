import { IQuestion } from 'app/shared/model/question.model';
import { ITestResult } from 'app/shared/model/test-result.model';

export interface IProfTest {
  id?: number;
  name?: string | null;
  description?: string | null;
  instruction?: string | null;
  questions?: IQuestion[] | null;
  testResults?: ITestResult[] | null;
}

export const defaultValue: Readonly<IProfTest> = {};
