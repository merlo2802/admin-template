import { Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.Component';

export const AppRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path:'',
    component:PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  },
  {path: '**', component: NopagefoundComponent},
];