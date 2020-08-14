import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dev Binder';
  logo = '../assets/images/logo.svg';

  constructor(private router: Router) {
    const token = localStorage.getItem('@dev-binder/access-token');

    if (token) router.navigateByUrl('home');
    else router.navigateByUrl('account');
  }
}
