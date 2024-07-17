import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-radio-form',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './radio-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioFormComponent),
      multi: true,
    },
  ],
})
export class RadioFormComponent implements ControlValueAccessor, OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() options: any[];
  @Input() disabled: boolean;

  protected value: boolean;
  protected optionsMap: { [key: string]: any };
  private readonly touched: boolean;

  private onChange!: (value: any) => void;
  private onTouched!: () => void;

  constructor() {
    this.label = '';
    this.name = '';
    this.options = [];
    this.disabled = false;
    this.value = this.options[0];
    this.optionsMap = {};
    this.touched = false;
  }

  ngOnInit() {
    this.determineError();
    this.optionsMap = this.options.reduce((map, option) => {
      map[this.optionToString(option)] = option;
      return map;
    }, {});
  }

  protected determineError(): string {
    if (this.touched) {
      return 'Este campo es obligatorio';
    }

    return '';
  }

  protected showError(): boolean {
    return !this.touched;
  }

  protected optionToString(option: any): string {
    if (typeof option === 'boolean') return option ? 'Sí' : 'No';
    return option;
  }

  protected optionsToString(options: any[]): any[] {
    return options.map(option => this.optionToString(option));
  }

  protected onSelect(value: any): void {
    const originalValue = this.optionsMap[value];
    this.writeValue(originalValue);
    this.onChange(originalValue);
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
