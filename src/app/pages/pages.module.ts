import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { Pages_Routes } from './pages.routing';


@NgModule({
  declarations: [
    // PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    Pages_Routes,
    SharedModule,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule { }
