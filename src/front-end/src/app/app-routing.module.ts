import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/social/social.module').then((m) => m.SocialModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
