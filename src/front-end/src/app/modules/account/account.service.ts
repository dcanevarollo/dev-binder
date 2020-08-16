import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GithubResponse } from '../../shared/contracts/github-response';
import { Account } from '../../shared/contracts/auth';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

export interface Token {
  type: string;
  token: string;
  expires_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly api = `${environment.api}/users`;

  public accountEmitter = new EventEmitter<Account>();

  constructor(private http: HttpClient, private router: Router) {}

  getGithubData(username: string): Promise<GithubResponse> {
    return this.http
      .get<GithubResponse>(`https://api.github.com/users/${username}`)
      .toPromise();
  }

  async login(data: User): Promise<void> {
    try {
      const { auth, user } = await this.http
        .post<{ auth: Token, user: User }>(this.api, data)
        .toPromise();

      this.accountEmitter.emit({ signed: true, user });

      localStorage.setItem('@dev-binder/access-token', auth.token);

      this.router.navigate(['home']);
    } catch (error) {
      // TODO : make a beautiful alert message
      const { error: response } = error;

      console.error(response.errors);
      alert(response.message);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.http.delete('logout').toPromise();
    } catch (error) {
      console.error(error.response?.data);
    } finally {
      this.accountEmitter.emit({ signed: false, user: null })

      localStorage.removeItem('@dev-binder/access-token');

      this.router.navigate(['account']);
    }
  }


}
