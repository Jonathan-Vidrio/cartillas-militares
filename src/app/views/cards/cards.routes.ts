import { Routes } from '@angular/router';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

export const CARDS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AllCardsComponent,
      },
      {
        path: 'agregar',
        component: CreateCardComponent,
      },
      {
        path: 'modificar/:id',
        component: EditCardComponent,
      },
      {
        path: 'detalles/:id',
        component: DetailsCardComponent,
      },
    ],
  },
];
