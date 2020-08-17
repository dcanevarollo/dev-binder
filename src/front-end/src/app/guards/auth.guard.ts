import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // TODO : handle token expiration date
    const token = localStorage.getItem('@dev-binder/access-token')

    if (token) {
      this.authService.emitAuth(JSON.parse(token));

      return true;
    };

    this.authService.emitAuth(null);

    this.router.navigate(['login']);

    return false;
  }
}
