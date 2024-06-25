import { AdvancedPersonalData } from './personal-data/advanced-personal-data.interface';

export interface Card {
  serieMatricula: string;
  numeroMatricula: number;
  personalData: AdvancedPersonalData;
}
