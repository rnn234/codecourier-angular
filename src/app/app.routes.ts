import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'install',
    loadComponent: () => import('./pages/install/install.component').then(m => m.InstallComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
