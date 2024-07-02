import { Component, forwardRef, Input, OnInit } from '@angular/core';
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
export class ComboboxFormComponent implements ControlValueAccessor, OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() options: string[];
  @Input() placeholder: string;

  protected value: string;
  private touched: boolean;

  private onChange!: (value: unknown) => void;
  private onTouched!: () => void;

  constructor() {
    this.id = '';
    this.label = '';
    this.options = [];
    this.placeholder = '';
    this.value = '';
    this.touched = false;
  }

  ngOnInit(): void {
    if (!this.placeholder) {
      this.value = this.options[0];
    }
  }

  determineError(): string {
    if (this.value === '' && this.touched) {
      return 'Este campo es obligatorio';
    }

    return '';
  }

  showError(): boolean {
    return this.touched && this.value === '' && this.options !== undefined;
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

  onSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.writeValue(select.value);
    if (typeof this.onChange === 'function') {
      this.onChange(select.value);
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
}
