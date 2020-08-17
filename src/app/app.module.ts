import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
//formularios 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//EndFirebase
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankComponent } from './core/blank/blank.component';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { PagesComponent } from './core/menu/pages.component';
import { MatDialog } from '@angular/material/dialog';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
//flex layout 
import {FlexLayoutModule} from '@angular/flex-layout';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 5
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AutenticacionModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),
    RouterModule.forRoot(AppRoutes, {useHash:true}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AngularFireDatabase,
    MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
