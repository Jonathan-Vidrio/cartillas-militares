import { Component, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ModalComponent } from '../../../shared/common/modal/modal.component';
import { InputFormComponent } from '../../../shared/common/input-form/input-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NgForOf, ModalComponent, InputFormComponent, FormsModule],
  templateUrl: './reports.component.html',
})
export class ReportsComponent {
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  protected reports: string[];
  protected startDate: Date;
  protected endDate: Date;

  constructor() {
    this.reports = this.getReports();
    this.endDate = new Date();
    this.startDate = this.subtractDays(this.endDate, 30);
  }

  getReports(): string[] {
    return [
      'Lista Inicial del Sorteo (Apéndice No. 3)',
      'Balance de Cartillas Expedidas (Apéndice No. 4)',
      'Informe del Efectivos Aislados Corte Mensual (Apéndice No. 5)',
      'Informe del Efectivos Aislados con Fecha de Corte (Apéndice No. 5)',
      'Informe del Efectivos Aislados solo para Años 2008 y 2009 (Apéndice No. 5)',
      'Listado para Sorteo',
      'Libro de Registro',
      'Informe por clases del Personal del Servicio Militar Nacional',
      'Informe por clases del Personal del Servicio Militar Nacional (Clase y Remisos)',
      'Informe por Clases y Grado de Estudios',
      'Informe por Color de Bolas en el Sorteo Nacional del Servicio Militar Nacional',
    ];
  }

  setSelectedReport(report: string): void {
    console.log('Selected report:', report);

    if (this.modalComponent) {
      this.modalComponent.title = report;
      this.modalComponent.show();
    }
  }

  subtractDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  handleSubmit(): void {
    console.log('Getting report from', this.startDate, 'to', this.endDate);
  }
}
