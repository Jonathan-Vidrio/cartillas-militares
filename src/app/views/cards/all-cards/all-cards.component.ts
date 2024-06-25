import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-all-cards',
  standalone: true,
  imports: [NgForOf, RouterLink, FormsModule, NgxPaginationModule],
  templateUrl: './all-cards.component.html',
})
export class AllCardsComponent {
  selectedFilter = 'matricula';
  searchValue = '';
  currentPage = 1;
  cards = [
    {
      serie: 'Serie 1',
      matricula: '1234 ABC',
      apellidoPaterno: 'Perez',
      apellidoMaterno: 'Gonzalez',
      nombre: 'Juan',
      domicilio: 'Calle 123',
    },
    {
      serie: 'Serie 2',
      matricula: '5678 DEF',
      apellidoPaterno: 'Gomez',
      apellidoMaterno: 'Lopez',
      nombre: 'Maria',
      domicilio: 'Calle 456',
    },
    {
      serie: 'Serie 3',
      matricula: '9012 GHI',
      apellidoPaterno: 'Rodriguez',
      apellidoMaterno: 'Hernandez',
      nombre: 'Pedro',
      domicilio: 'Calle 789',
    },
    {
      serie: 'Serie 4',
      matricula: '3456 JKL',
      apellidoPaterno: 'Garcia',
      apellidoMaterno: 'Martinez',
      nombre: 'Ana',
      domicilio: 'Calle 012',
    },
  ];

  constructor() {}

  searchCard() {
    console.log('searchCard');
  }
}
