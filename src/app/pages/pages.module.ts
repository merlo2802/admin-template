import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { Pages_Routes } from './pages.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../core/materialCommon/demomaterial.module';
import { RubroComponent } from './rubro/rubro.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogoCrearEditarRubroComponent } from './rubro/dialogo-crear-editar-rubro/dialogo-crear-editar-rubro.component';
import { DemoTableComponent } from './demo-table/demo-table.component';
//tabla ngxDatatableModule
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    // PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    RubroComponent,
    DialogoCrearEditarRubroComponent,
    DemoTableComponent
  ],
  imports: [
    CommonModule,
    Pages_Routes,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    LayoutModule,
    FlexLayoutModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  entryComponents:[
    DialogoCrearEditarRubroComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PagesModule { }
