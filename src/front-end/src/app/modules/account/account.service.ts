import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GitHubUser } from '../../shared/contracts/github-user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly apiUrl = `${environment.api}/users`;

  constructor(private http: HttpClient) {}

  fetchGitHubData(username: string): Promise<GitHubUser> {
    return this.http
      .get<GitHubUser>(`https://api.github.com/users/${username}`)
      .toPromise();
  }

  storeUser(payload: object): Observable<object> {
    return this.http.post(this.apiUrl, payload).pipe(take(1));
  }


}
