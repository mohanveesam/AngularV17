import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppointmentComponent } from './doctor-appointment/appointment/appointment.component';

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
      },
      {
        path: 'usersapi',
        loadComponent: ()=>
        import('./pages/usercomp/usercomp.component').then((m) => m.UsercompComponent)
      },
      {
        path: 'directives',
        loadComponent: ()=>
        import('./pages/directives/directives.component').then((m) => m.DirectivesComponent)
      },
      {
        path: 'pipes',
        loadComponent: ()=>
        import('./pages/pipes/pipes.component').then((m) => m.PipesComponent)
      },
      {
        path: 'dbinding',
        loadComponent: ()=>
        import('./pages/dbinding/dbinding.component').then((m) => m.DbindingComponent)
      },
      {
        path: 'crud',
        loadComponent: ()=>
        import('./pages/crud/crud.component').then((m) =>m.CrudComponent)
      },
      {
        path: 'employee',
        loadComponent: ()=>
        import('./employee/emp/emp.component').then((m) =>m.EmpComponent)
      },
        {
        path: 'appointment',
        loadComponent: ()=>
        import('./doctor-appointment/appointment/appointment.component').then((m) =>m.AppointmentComponent)
      },
    ],
  },
];
