import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { Pages_Routes } from './pages.routing';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../core/materialCommon/demomaterial.module';
import { RubroComponent } from './rubro/rubro.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    RubroComponent,
  ],
  imports: [
    CommonModule,
    Pages_Routes,
    SharedModule,
    FormsModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule { }
