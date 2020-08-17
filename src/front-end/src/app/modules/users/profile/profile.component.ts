import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private dataSubscription: Subscription;

  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataSubscription = this.route.data.subscribe(
      (resolver: { user: User }) => {
        this.user = resolver.user;
      },
    );
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
