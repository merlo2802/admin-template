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
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, {useHash:true}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
