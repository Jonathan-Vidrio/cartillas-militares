import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cardForm } from '../../../forms/card/card.form';
import { NgForOf, NgIf } from '@angular/common';
import { InputFormComponent } from '../../../shared/common/input-form/input-form.component';
import { ComboboxFormComponent } from '../../../shared/common/combobox-form/combobox-form.component';
import { RadioFormComponent } from '../../../shared/common/radio-form/radio-form.component';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf, InputFormComponent, ComboboxFormComponent, RadioFormComponent],
  templateUrl: './create-card.component.html',
})
export class CreateCardComponent implements OnInit {
  protected cardForm: FormGroup = cardForm;
  protected maritalStatusOptions: string[];
  protected ladaOptions: string[];

  constructor() {
    this.maritalStatusOptions = ['Soltero', 'Casado', 'Divorciado', 'Viudo'];
    this.ladaOptions = ['+502', '+1', '+34'];
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.cardForm.value);
  }
}
