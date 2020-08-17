import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DemoMaterialModule } from '../core/materialCommon/demomaterial.module';
import { ClicPageComponent } from './click-page/clic-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
    ClicPageComponent,
    HeaderPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    DemoMaterialModule,
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
    ClicPageComponent,
    HeaderPageComponent,
  ],
  providers: []
})
export class SharedModule { }
