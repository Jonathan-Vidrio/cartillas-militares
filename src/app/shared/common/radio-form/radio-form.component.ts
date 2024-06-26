import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-radio-form',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './radio-form.component.html',
  styleUrl: './radio-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioFormComponent),
      multi: true,
    },
  ],
})
export class RadioFormComponent implements ControlValueAccessor {
  @Input() ids: string[];
  @Input() label: string;
  @Input() name: string;

  protected value: boolean;
  private touched: boolean;

  constructor() {
    this.ids = [];
    this.label = '';
    this.name = '';
    this.value = false;
    this.touched = false;
  }

  determineError(): string {
    if (this.touched) {
      return 'Este campo es obligatorio';
    }

    return '';
  }

  showError(): boolean {
    return !this.touched;
  }

  onSelect(value: boolean): void {
    this.writeValue(value);
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(): void {}
  registerOnTouched(): void {}
  onBlur(): void {}
}
