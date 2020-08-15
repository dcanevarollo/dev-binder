import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  payload: object;

  credentials = { username: '', password: '' };

  constructor(private service: AccountService, private router: Router) {}

  async handleSubmit(): Promise<void> {
    const response = await this.service.fetchGitHubData(this.credentials.username);

    this.payload = {
      name: response.name,
      username: response.login,
      password: this.credentials.password,
      bio: response.bio,
      currentJob: response.company,
      avatarUrl: response.avatar_url,
    };

    // TODO : handle messages
    this.service.storeUser(this.payload).subscribe(
      () => this.router.navigateByUrl('home'),
      (err) => console.error(err),
    );
  }
}
