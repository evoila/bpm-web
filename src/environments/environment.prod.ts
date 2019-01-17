
import { KeycloakConfig } from 'keycloak-angular';

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8081',
  realm: 'BOSH-Package-Manager',
  clientId: 'bosh-package-manager-frontend'
};


export const environment = {
  production: true,
  keycloak: keycloakConfig
};
