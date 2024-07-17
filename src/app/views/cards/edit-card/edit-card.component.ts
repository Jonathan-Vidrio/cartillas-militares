import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cardForm } from '../../../forms/card/card.form';
import { NgForOf, NgIf } from '@angular/common';
import { InputFormComponent } from '../../../shared/common/input-form/input-form.component';
import { ComboboxFormComponent } from '../../../shared/common/combobox-form/combobox-form.component';
import { RadioFormComponent } from '../../../shared/common/radio-form/radio-form.component';
import States from '../../../../utils/estados-municipios.json';
import InternationalLadas from '../../../../utils/international-ladas.json';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../../services/alert.service';
import { CardsService } from '../../../../services/cards.service';
import { Subject, takeUntil } from 'rxjs';
import { Response } from '../../../core/models/response.interface';

@Component({
  selector: 'app-edit-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf, InputFormComponent, ComboboxFormComponent, RadioFormComponent],
  templateUrl: './edit-card.component.html',
})
export class EditCardComponent implements OnInit, OnDestroy {
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
    private service: CardsService,
    private route: ActivatedRoute
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

    this.loadCard();
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

  private getCardId(): string | null {
    return this.route.snapshot.paramMap.get('id');
  }

  private loadCard(): void {
    this.service
      .getCard(Number(this.getCardId() || '0'))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response: Response): void => {
          this.cardForm.patchValue(response.body[0]);
        },
        error: (error: any) => console.error(error),
      });
  }

  protected onSubmit(): void {
    if (this.cardForm.invalid) {
      console.log(this.cardForm.value);
      this.alert.error('Formulario incompleto');
      return;
    }

    this.alert.success('Tarjeta creada');
  }

  protected onCancel(): void {
    this.cardForm.reset();
    this.router.navigate(['/cartillas']).then();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
