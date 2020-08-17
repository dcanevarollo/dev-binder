import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './modules/auth/auth.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  logo = '../assets/images/logo.svg';

  user: User = null;

  private authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authEmitter.subscribe(
      (user: User) => {
        this.user = user;
      },
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  dispatchLogout(): void {
    this.authService.logout();
  }
}
