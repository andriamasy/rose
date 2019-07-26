import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  private decode = decode;
  constructor(
    public auth: AuthenticationService, 
    public router: Router,
    public jwtHelper: JwtHelperService
    ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let roleDecode: string;
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    let role = `ROLE_${expectedRole}`;
    const token = localStorage.getItem('accessToken');
    
    // decode the token to get its payload
    const tokenPayload = this.jwtHelper.decodeToken(token);
    roleDecode = tokenPayload.roles;
    if (
      !this.auth.isAuthenticated() || 
      `${roleDecode}` !== `${role}`
    ) {
      localStorage.setItem('denie', 'not access')
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
