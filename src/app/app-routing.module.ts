import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', children: [], pathMatch: 'full' },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), pathMatch: 'full' },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }
