import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cardForm } from '../../../forms/card/card.form';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf],
  templateUrl: './create-card.component.html',
})
export class CreateCardComponent implements OnInit {
  protected cardForm: FormGroup = cardForm;
  protected occupations: any[] = [
    { id: 1, name: 'Programmer' },
    { id: 2, name: 'Designer' },
    { id: 3, name: 'Manager' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.cardForm.value);
  }
}
