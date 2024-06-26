import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-combobox-form',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './combobox-form.component.html',
  styleUrls: ['./combobox-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboboxFormComponent),
      multi: true,
    },
  ],
})
export class ComboboxFormComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() label: string;
  @Input() options: string[];
  @Input() placeholder: string;

  protected value: string;
  private touched: boolean;

  constructor() {
    this.id = '';
    this.label = '';
    this.options = [];
    this.placeholder = '';
    this.value = '';
    this.touched = false;
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

  onSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.writeValue(select.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(): void {}
}
