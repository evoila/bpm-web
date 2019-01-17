import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
   
    userDetails: KeycloakProfile;

    constructor(private keycloakService: KeycloakService) {}
  
    async ngOnInit() {
      if (await this.keycloakService.isLoggedIn()) {
        this.userDetails = await this.keycloakService.loadUserProfile(); 
      }
    }
  
  
    async doLogout() {
      await this.keycloakService.logout();
    }
}