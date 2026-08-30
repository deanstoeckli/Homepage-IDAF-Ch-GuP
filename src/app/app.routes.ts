import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Startseite',
        data: { icon: 'home', title: 'Startseite' },
        loadComponent: () => import('./features/start/start.component').then((m) => m.StartComponent),
      },
      {
        path: 'gemeinsame-fragestellung',
        title: 'Gemeinsame Fragestellung',
        data: { title: 'Gemeinsame Fragestellung' },
        loadComponent: () => import('./features/pages/problem/problem.component').then((m) => m.ProblemComponent),
      },
      {
        path: 'chemischer-teil',
        title: 'Chemischer Teil',
        data: { title: 'Chemischer Teil' },
        loadComponent: () => import('./features/pages/chemistry/chemistry.component').then((m) => m.ChemistryComponent),
      },
      {
        path: 'historischer-teil',
        title: 'Historischer Teil',
        data: { title: 'Historischer Teil' },
        loadComponent: () => import('./features/pages/history/history.component').then((m) => m.HistoryComponent),
      },
      {
        path: 'verknuepfung',
        title: 'Verknüpfung',
        data: { title: 'Verknüpfung' },
        loadComponent: () => import('./features/pages/connection/connection.component').then((m) => m.ConnectionComponent),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
