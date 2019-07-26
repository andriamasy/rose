import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaterialModule } from './material/material.module';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('accessToken');
}

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { SnackBarComponent } from './shared/snack-bar/snack-bar.component';
import { AjouterPersonnelComponent } from './shared/ajouter-personnel/ajouter-personnel.component';
import { AgmCoreModule } from '@agm/core';
import { DialogAjouterCourrierDepartComponent } from './shared/dialog-ajouter-courrier-depart/dialog-ajouter-courrier-depart.component';
import { DialogSupprimercourrierdepartComponent } from './shared/dialog-supprimercourrierdepart/dialog-supprimercourrierdepart.component';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    DialogComponent,
    SnackBarComponent,
    AjouterPersonnelComponent,
    DialogAjouterCourrierDepartComponent,
    DialogSupprimercourrierdepartComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: true }),
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    MaterialModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBVkohftH_rCJEi2mw2U2LvrTbhLa9SxW0'
    })
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  entryComponents: [
   DialogAjouterCourrierDepartComponent, 
   DialogComponent,
   SnackBarComponent,
   AjouterPersonnelComponent,
   DialogSupprimercourrierdepartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
