import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { UsersService } from '../users.service';

@Injectable()
export class ProfileResolver implements Resolve<User> {
  constructor(private service: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<User> | Promise<User> | User {
    const { username } = route.params;

    return this.service.getUser(username);
  }
}
