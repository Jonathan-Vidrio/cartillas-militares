import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cartillas',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'cartillas',
    loadChildren: () => import('./views/cards/cards.routes').then(m => m.CARDS_ROUTES),
  },
  {
    path: 'reportes',
    loadChildren: () => import('./views/reports/reports.routes').then(m => m.REPORTS_ROUTES),
  },
];
