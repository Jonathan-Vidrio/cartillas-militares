import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from '../../core/models/card.interface';

export const cardForm: FormGroup = new FormGroup({
  // card data
  registrationSeries: new FormControl('', [Validators.required]),
  registrationNumber: new FormControl('', [Validators.required]),

  // personal data
  name: new FormControl('', [Validators.required]),
  paternalSurname: new FormControl('', [Validators.required]),
  maternalSurname: new FormControl('', [Validators.required]),
  curp: new FormControl('', [Validators.required]),
  birthdate: new FormControl('', [Validators.required]),
  nationality: new FormControl('', [Validators.required]),
  state: new FormControl('', [Validators.required]),
  municipality: new FormControl('', [Validators.required]),
  maritalStatus: new FormControl('', [Validators.required]),
  occupation: new FormControl('', [Validators.required]),
  literacy: new FormControl(false, [Validators.required]),
  educationLevel: new FormControl('', [Validators.required]),
  address: new FormControl('', [Validators.required]),
  phone: new FormControl('', [Validators.required]),

  // father data
  fatherName: new FormControl('', [Validators.required]),
  fatherPaternalSurname: new FormControl('', [Validators.required]),
  fatherMaternalSurname: new FormControl('', [Validators.required]),
  fatherAlive: new FormControl('', [Validators.required]),

  // mother data
  motherName: new FormControl('', [Validators.required]),
  motherPaternalSurname: new FormControl('', [Validators.required]),
  motherMaternalSurname: new FormControl('', [Validators.required]),
  motherAlive: new FormControl(false, [Validators.required]),

  // grandparents data
  livingGrandParents: new FormControl(0, [Validators.required]),

  // spouse data
  spouseAlive: new FormControl(false, [Validators.required]),

  // children data
  numberChildren: new FormControl(0, [Validators.required]),
} as {
  [K in keyof Card]: FormControl;
});
