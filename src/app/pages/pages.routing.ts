import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { RubroComponent } from './rubro/rubro.component';


const PagesRoutes: Routes = [
  {
    path: '', 
    component: DashboardComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'graficas1',
    component: Graficas1Component
  },
  {
    path: 'rubro',
    component: RubroComponent,
  },
]; 

export const Pages_Routes = RouterModule.forChild(PagesRoutes);