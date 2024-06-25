import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./views/cards/cards.routes').then(m => m.CARDS_ROUTES),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./views/reports/reports.routes').then(m => m.REPORTS_ROUTES),
  },
];
