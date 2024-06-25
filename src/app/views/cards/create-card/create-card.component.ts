import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cardForm } from '../../../forms/card/card.form';
import { NgForOf, NgIf } from '@angular/common';
import { InputFormComponent } from '../../../shared/common/input-form/input-form.component';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf, InputFormComponent],
  templateUrl: './create-card.component.html',
})
export class CreateCardComponent implements OnInit {
  protected cardForm: FormGroup = cardForm;
  protected occupations: any[] = [
    { id: 1, name: 'Programmer' },
    { id: 2, name: 'Designer' },
    { id: 3, name: 'Manager' },
  ];
  protected maritalStatuses: any[] = [
    { id: 1, name: 'Single' },
    { id: 2, name: 'Married' },
    { id: 3, name: 'Divorced' },
  ];
  protected educationLevels: any[] = [
    { id: 1, name: 'Elementary' },
    { id: 2, name: 'High School' },
    { id: 3, name: 'University' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.cardForm.value);
  }
}
