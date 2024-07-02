import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './reports.component.html',
})
export class ReportsComponent {
  protected reports: string[];
  constructor() {
    this.reports = this.getReports();
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
}
