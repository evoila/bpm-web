import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PackagesComponent } from './package/package.component';
import { LoginComponent } from './login/login.component';
import { AppAuthGuard } from './app.authguard';

const routes: Routes = [
  {
    path: 'packages',
    component: PackagesComponent,
    canActivate: [AppAuthGuard]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, PackagesComponent];