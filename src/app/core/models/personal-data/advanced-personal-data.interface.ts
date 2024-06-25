import { BasicPersonalData } from './basic-personal-data.interface';

export interface AdvancedPersonalData {
  basicPersonalData: BasicPersonalData;
  curp: string;
  birthdate: Date;
  nationality: string;
  state: string;
  city: string;
  civilStatus: string;
  occupation: string;
  literacy: boolean;
  educationLevel: string;
  address: string;
  phone: string;
  fatherData: BasicPersonalData;
  motherData: BasicPersonalData;
  livingGrandParents: number;
  wifeAlive: boolean;
  livingChildren: number;
}
