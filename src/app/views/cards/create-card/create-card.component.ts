import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cardForm } from '../../../forms/card/card.form';
import { NgForOf, NgIf } from '@angular/common';
import { InputFormComponent } from '../../../shared/common/input-form/input-form.component';
import { ComboboxFormComponent } from '../../../shared/common/combobox-form/combobox-form.component';
import { RadioFormComponent } from '../../../shared/common/radio-form/radio-form.component';
import States from '../../../../assets/estados-municipios.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf, InputFormComponent, ComboboxFormComponent, RadioFormComponent],
  templateUrl: './create-card.component.html',
})
export class CreateCardComponent implements OnInit {
  protected cardForm: FormGroup;
  protected maritalStatusOptions: string[];
  protected countryCode: string[];
  protected states: string[];
  protected municipalities: string[];

  constructor(private readonly router: Router) {
    this.cardForm = cardForm;
    this.maritalStatusOptions = this.getMaritalStatusOptions();
    this.countryCode = this.getCountryCodes();
    this.states = this.getStates();
    this.municipalities = [];
  }

  ngOnInit(): void {
    this.cardForm.get('state')?.valueChanges.subscribe(state => {
      this.municipalities = this.getMunicipalities(state);
    });
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      console.log(this.cardForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  onCancel(): void {
    this.cardForm.reset({
      registrationSeries: '',
      registrationNumber: 0,
      class: 0,
      paternalSurname: '',
      maternalSurname: '',
      name: '',
      curp: '',
      birthdate: '',
      state: '',
      municipality: '',
      maritalStatus: '',
      occupation: '',
      literacy: false,
      educationLevel: '',
      address: '',
      phone: '',
      fatherName: '',
      fatherPaternalSurname: '',
      fatherMaternalSurname: '',
      fatherAlive: false,
      motherName: '',
      motherPaternalSurname: '',
      motherMaternalSurname: '',
      motherAlive: false,
      livingGrandParents: 0,
      spouseAlive: false,
      numberChildren: 0,
    });
    this.router.navigate(['/cards']).then();
  }

  private getMaritalStatusOptions(): string[] {
    return ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Unión libre'];
  }

  private getCountryCodes(): string[] {
    return ['+502', '+1', '+34'];
  }

  private getStates(): string[] {
    return Object.keys(States);
  }

  private getMunicipalities(state: string): string[] {
    return (States as any)[state];
  }
}
