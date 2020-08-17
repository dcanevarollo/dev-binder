import { Component, OnInit , OnDestroy} from '@angular/core';
import { AuthService } from './modules/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  logo = '../assets/images/logo.svg';

  signed = false;

  private subscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.authEmitter.subscribe(
      (signed: boolean) => this.signed = signed
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dispatchLogout(): void {
    this.authService.logout();
  }
}
