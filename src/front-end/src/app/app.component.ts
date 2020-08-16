import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logo = '../assets/images/logo.svg';

  signed = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authEmitter.subscribe(
      (signed: boolean) => this.signed = signed
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
