import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormComponent),
      multi: true,
    },
  ],
})
export class InputFormComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;

  protected value: string;
  private touched: boolean;

  constructor() {
    this.id = '';
    this.type = '';
    this.label = '';
    this.placeholder = '';
    this.value = '';
    this.touched = false;
  }

  determineError(): string {
    if (this.type === '' || this.type === 'text') {
      return this.touched && this.value.trim() === '' ? 'Campo requerido' : '';
    }

    if (this.type === 'number') {
      return this.touched && (isNaN(Number(this.value)) || Number(this.value) < 0) ? 'Número inválido' : '';
    }

    return '';
  }

  showError(): boolean {
    if (this.type === '' || this.type === 'text') {
      return this.touched && this.value.trim() === '';
    }

    if (this.type === 'number') {
      return this.touched && (isNaN(Number(this.value)) || Number(this.value) < 0);
    }

    return false;
  }

  registerOnTouched(): void {
    this.touched = false;
  }

  onBlur(): void {
    this.touched = true;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.writeValue(input.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(): void {}
}
