import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss',
})
export class InputFormComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() formControl: FormControl;

  constructor() {
    this.label = '';
    this.placeholder = '';
    this.type = 'text';
    this.value = '';
    this.disabled = false;
    this.required = false;
    this.readonly = false;
    this.maxlength = 255;
    this.minlength = 0;
    this.formControl = new FormControl();
  }
}
