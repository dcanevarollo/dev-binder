import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    return this.verifyAccess();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyAccess();
  }

  private verifyAccess(): boolean {
    // TODO : handle token expiration date
    const token = localStorage.getItem('@dev-binder/access-token');

    if (token) {
      this.authService.emitAuth(JSON.parse(token));

      return true;
    }

    this.authService.emitAuth(null);

    this.router.navigate(['login']);

    return false;
  }
}
