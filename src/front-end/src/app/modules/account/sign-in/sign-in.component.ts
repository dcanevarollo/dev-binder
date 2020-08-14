import { Component } from '@angular/core';

import { AccountService } from '../account.service';

import { Credentials } from 'src/app/shared/contracts/credentials';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: Credentials;

  constructor(private service: AccountService) {
    this.credentials = { username: '', password: '' };
  }

  signIn(): void {}
}
