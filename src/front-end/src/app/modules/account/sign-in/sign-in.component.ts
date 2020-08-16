import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: User = { username: '', password: '' };

  constructor(private service: AccountService, private router: Router) {}

  async handleSubmit(): Promise<void> {
    const { username, password } = this.credentials;

    try {
      const response = await this.service.getGithubData(username);

      const data: User = {
        name: response.name,
        username,
        password,
        bio: response.bio,
        current_job: response.company,
        avatar_url: response.avatar_url,
      };

      await this.service.login(data);
    } catch (error) {
      // TODO : make a beautiful alert message
      if (error.status === 404) alert('Credenciais inválidas');
      else console.error(error.message);
    }
  }
}
