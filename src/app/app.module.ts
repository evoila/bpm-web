import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  NgbDropdownModule, NgbCollapseModule, NgbTypeaheadModule,
  NgbTooltipModule, NgbModalModule, NgbPopoverModule, NgbTabsetModule,
   NgbPaginationModule, NgbAccordion, NgbModule
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PackagesComponent } from './package/package.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PackageService } from './package.service';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { LoginComponent } from './login/login.component';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';

@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    PackageDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbModalModule,
    NgbPopoverModule,
    NgbTypeaheadModule,
    NgbTabsetModule,
    KeycloakAngularModule
  ],
  providers: [
    PackageService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
