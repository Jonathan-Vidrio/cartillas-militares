export interface Card {
  // card data
  registrationSeries: string;
  registrationNumber: number;

  // personal data
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  curp: string;
  birthdate: Date;
  nationality: string;
  state: string;
  municipality: string;
  civilStatus: string;
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
