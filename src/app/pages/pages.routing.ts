import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


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
]; 

export const Pages_Routes = RouterModule.forChild(PagesRoutes);