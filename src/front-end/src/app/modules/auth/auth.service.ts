import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

interface Token {
  type: string;
  token: string;
  expires_at: string;
}

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly resourceUrl = `${environment.api}/auth`;

  private readonly accessToken = '@dev-binder/access-token';

  user: User = null;

  authEmitter = new EventEmitter<User>();

  constructor(private http: HttpClient, private router: Router) {}

  async emitAuth(token: Token): Promise<void> {
    if (token && !this.user)
      this.user = await this.http
        .get<User>(this.resourceUrl, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .toPromise();

    this.authEmitter.emit(this.user);
  }

  async login(data: Credentials): Promise<void> {
    try {
      const token = await this.http
        .post<Token>(`${this.resourceUrl}/login`, data)
        .toPromise();

      localStorage.setItem(this.accessToken, JSON.stringify(token));

      this.router.navigate(['']);
    } catch (error) {
      // TODO : make a beautiful alert message
      const { error: response } = error;

      console.error(response.errors);
      alert(response.message);
    }
  }

  async logout(): Promise<void> {
    try {
      const accessToken = localStorage.getItem(this.accessToken);

      if (accessToken) {
        const { token } = JSON.parse(accessToken);

        await this.http
          .delete(`${this.resourceUrl}/logout`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .toPromise();
      }
    } catch (error) {
      console.error(error.error?.message);
    } finally {
      this.user = null;

      this.emitAuth(null);

      localStorage.removeItem(this.accessToken);

      this.router.navigate(['login']);
    }
  }
}
