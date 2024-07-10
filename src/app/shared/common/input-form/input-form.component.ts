import { Component, forwardRef, Input } from '@angular/core';
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
  private touched: boolean;
  @Input() set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }
  get value(): any {
    return this._value;
  }
  private _value: any = '';

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    this.id = '';
    this.type = '';
    this.label = '';
    this.placeholder = '';
    this.value = this.type === 'number' ? '0' : '';
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

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onFocus(): void {
    this.touched = false;
  }

  onBlur(): void {
    this.touched = true;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.writeValue(input.value);
    this.onChange(input.value);
  }

  writeValue(value: any): void {
    if (value instanceof Date) {
      const dateStr = value.toISOString().substring(0, 10);
      this._value = dateStr;
    } else if (value !== undefined) {
      this._value = value;
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
}
