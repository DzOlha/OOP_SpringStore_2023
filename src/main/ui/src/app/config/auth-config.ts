import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8180/realms/online-shop-realm',
  clientId: 'shop-client',
  responseType: 'code',
  redirectUri: window.location.origin + "/login",
  scope: 'openid profile email offline_access roles',
  disableAtHashCheck: true,
  showDebugInformation: true,
  requireHttps: false
};
