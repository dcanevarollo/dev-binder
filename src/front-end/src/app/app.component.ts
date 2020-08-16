import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly accessToken = environment.access_token;

  public logo = '../assets/images/logo.svg';

  public signed = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem(this.accessToken);

    if (token) {
      this.signed = true;

      this.router.navigate(['home']);
    } else this.router.navigate(['auth']);
  }
}
