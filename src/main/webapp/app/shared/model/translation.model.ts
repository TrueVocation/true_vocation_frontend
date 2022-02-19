export interface ITranslation {
  id?: number;
  code?: string | null;
  en?: string | null;
  ru?: string | null;
  kk?: string | null;
}

export const defaultValue: Readonly<ITranslation> = {};
