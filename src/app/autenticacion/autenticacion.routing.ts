import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const AutenticacionRoutes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]; 

export const Autenticacion_Routes = RouterModule.forChild(AutenticacionRoutes);