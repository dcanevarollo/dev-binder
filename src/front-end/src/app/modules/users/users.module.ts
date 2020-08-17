import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UsersService } from './users.service';
import { ProfileResolver } from './profile/profile.resolver';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [UsersService, ProfileResolver],
})
export class UsersModule {}
