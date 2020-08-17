import { Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './core/menu/pages.component';
import { BlankComponent } from './core/blank/blank.component';

export const AppRoutes: Routes = [
  {
    path:'',
    component:PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path:'autenticacion',
    component:BlankComponent,
    loadChildren: './autenticacion/autenticacion.module#AutenticacionModule'
  },
  {path: '**', component: NopagefoundComponent},
];