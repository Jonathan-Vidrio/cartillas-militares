import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cardForm } from '../../../forms/card/card.form';
import { NgForOf, NgIf } from '@angular/common';
import { InputFormComponent } from '../../../shared/common/input-form/input-form.component';
import { ComboboxFormComponent } from '../../../shared/common/combobox-form/combobox-form.component';
import { RadioFormComponent } from '../../../shared/common/radio-form/radio-form.component';
import States from '../../../../utils/estados-municipios.json';
import InternationalLadas from '../../../../utils/international-ladas.json';
import { Router } from '@angular/router';
import { AlertService } from '../../../../services/alert.service';
import { CardsService } from '../../../../services/cards.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf, InputFormComponent, ComboboxFormComponent, RadioFormComponent],
  templateUrl: './create-card.component.html',
})
export class CreateCardComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void>;

  protected cardForm: FormGroup;
  protected maritalStatusOptions: string[];
  protected internationalLadas: string[];
  protected states: string[];
  protected municipalities: string[];
  protected educationLevels: string[];

  constructor(
    private router: Router,
    private alert: AlertService,
    private service: CardsService
  ) {
    this.unsubscribe$ = new Subject<void>();
    this.cardForm = cardForm;
    this.maritalStatusOptions = [];
    this.internationalLadas = [];
    this.states = [];
    this.municipalities = [];
    this.educationLevels = [];
  }

  ngOnInit(): void {
    this.maritalStatusOptions = this.getMaritalStatusOptions();
    this.internationalLadas = this.getCountryCodes();
    this.educationLevels = this.getEducationLevels();
    this.states = this.getStates();
    this.cardForm.get('state')?.valueChanges.subscribe(state => {
      this.municipalities = this.getMunicipalities(state);
    });
  }

  private getMaritalStatusOptions(): string[] {
    return ['Soltero', 'Casado', 'Divorciado', 'Viudo', 'Unión libre'];
  }

  private getCountryCodes(): string[] {
    return Object.values(InternationalLadas);
  }

  private getEducationLevels(): string[] {
    return ['Primaria', 'Secundaria', 'Preparatoria', 'Carrera Técnica', 'Licenciatura', 'Posgrado'];
  }

  private getStates(): string[] {
    return Object.keys(States);
  }

  private getMunicipalities(state: string): string[] {
    return (States as any)[state];
  }

  private resetForm(): void {
    this.cardForm.reset({
      registrationSeries: '',
      registrationNumber: 0,
      class: 0,
      paternalSurname: '',
      maternalSurname: '',
      name: '',
      curp: '',
      birthdate: '',
      state: 'Jalisco',
      municipality: 'Autlán de Navarro',
      maritalStatus: '',
      occupation: '',
      literacy: true,
      educationLevel: '',
      address: '',
      phone: '',
      fatherName: '',
      fatherPaternalSurname: '',
      fatherMaternalSurname: '',
      fatherAlive: true,
      motherName: '',
      motherPaternalSurname: '',
      motherMaternalSurname: '',
      motherAlive: true,
      livingGrandParents: 0,
      spouseAlive: true,
      numberChildren: 0,
    });
  }

  protected onSubmit(): void {
    if (this.cardForm.invalid) {
      this.alert.error('Formulario incompleto');
      return;
    }

    this.alert.confirm('¿Estás seguro de que deseas guardar la cartilla?').then(async (result: boolean) => {
      if (!result) return;

      const formData = {
        ...this.cardForm.value,
        registrationNumber: parseInt(this.cardForm.value.registrationNumber),
        class: parseInt(this.cardForm.value.class),
        literacy: this.cardForm.value.literacy !== true ? 0 : 1,
        fatherAlive: this.cardForm.value.fatherAlive !== true ? 0 : 1,
        motherAlive: this.cardForm.value.motherAlive !== true ? 0 : 1,
        spouseAlive: this.cardForm.value.spouseAlive !== true ? 0 : 1,
        numberChildren: parseInt(this.cardForm.value.numberChildren),
      };

      this.service
        .createCard(formData)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: () => {
            this.alert.success('Cartilla creada');
            this.router.navigate(['/cartillas']).then(() => this.resetForm());
          },
          error: (error: any) => console.error(error),
        });
    });
  }

  protected onCancel(): void {
    this.router.navigate(['/cartillas']).then(() => this.resetForm());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.resetForm();
  }
}
