import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Credentials } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials: Credentials = { username: '', password: '' };

  constructor(private service: AuthService, private router: Router) {}

  login(): void {
    this.service.login(this.credentials);
  }
}
