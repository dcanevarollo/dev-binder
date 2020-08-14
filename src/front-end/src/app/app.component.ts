import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dev Binder';
  logo = '../assets/images/logo.svg';

  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router
  ) {}
}
