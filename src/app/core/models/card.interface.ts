export interface Card {
  id?: number;

  // card data
  registrationSeries: string;
  registrationNumber: number;
  class: number;

  // personal data
  paternalSurname: string;
  maternalSurname: string;
  name: string;
  curp: string;
  birthdate: Date;
  state: string;
  municipality: string;
  maritalStatus: string;
  occupation: string;
  literacy: boolean;
  educationLevel: string;
  address: string;
  phone: string;

  // father data
  fatherName: string;
  fatherPaternalSurname: string;
  fatherMaternalSurname: string;
  fatherAlive: boolean;

  // mother data
  motherName: string;
  motherPaternalSurname: string;
  motherMaternalSurname: string;
  motherAlive: boolean;

  // grandparents data
  livingGrandParents: number;

  // spouse data
  spouseAlive: boolean;

  // children data
  numberChildren: number;
}
