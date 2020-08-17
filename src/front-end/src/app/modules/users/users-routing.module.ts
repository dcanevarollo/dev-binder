import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolver } from './profile/profile.resolver';

const routes: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    resolve: { user: ProfileResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
