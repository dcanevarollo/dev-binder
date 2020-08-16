import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './modules/account/account.service';
import { Account } from './shared/contracts/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dev Binder';

  logo = '../assets/images/logo.svg';

  signed = false;

  constructor(private accountService: AccountService, private router: Router) {
    if (this.signed) this.router.navigate(['home']);
    else this.router.navigate(['account']);
  }

  ngOnInit(): void {
    this.accountService.accountEmitter.subscribe(
      (account: Account) => this.signed = account.signed
    );
  }
}
