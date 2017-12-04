import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', children: [], pathMatch: 'full' },
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule', pathMatch: 'full' },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule {}
