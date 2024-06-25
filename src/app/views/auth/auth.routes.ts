import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
];
