import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  private readonly resourceUrl = `${environment.api}/users`;

  private readonly accessToken = '@dev-binder/access-token';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    try {
      const { token } = JSON.parse(localStorage.getItem(this.accessToken));

      const user = this.http.get<User>(`${this.resourceUrl}/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return user;
    } catch (error) {
      console.error(error.error?.message);
    }
  }
}
