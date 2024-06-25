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
  protected disabled = false;

  private touched = false;

  constructor() {
    this.id = '';
    this.type = '';
    this.label = '';
    this.placeholder = '';
    this.value = '';
  }

  determineError(): string {
    if (this.value.trim() === '' && this.touched) {
      return 'Este campo es obligatorio';
    }
    return '';
  }

  showError(): boolean {
    return this.touched && this.value.trim() === '';
  }

  registerOnTouched(): void {
    this.touched = false;
  }

  onBlur(): void {
    this.touched = true;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  writeValue(): void {}

  registerOnChange(): void {}
}
