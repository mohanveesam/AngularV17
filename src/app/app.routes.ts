import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
      {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'dataiteration',
        loadComponent: () =>
          import('./pages/data-iteration/data-iteration.component').then((m) => m.DataIterationComponent),
      },
      {
        path: 'rform',
        loadComponent: () =>
          import('./pages/rform/rform.component').then((m) => m.RformComponent),
      },
      {
        path: 'tform',
        loadComponent: () =>
          import('./pages/tform/tform.component').then((m) => m.TformComponent),
      },
      {
        path: 'farray',
        loadComponent: () =>
          import('./pages/farray/farray.component').then((m) => m.FarrayComponent),
      }
    ],
  },
];
