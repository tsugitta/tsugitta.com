import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', children: [], pathMatch: 'full' },

  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfileModule),
    pathMatch: 'full',
  },

  {
    path: 'contributions',
    loadChildren: () =>
      import('./contributions/contributions.module').then(
        m => m.ContributionsModule,
      ),
    pathMatch: 'full',
  },

  {
    path: 'works',
    loadChildren: () => import('./works/works.module').then(m => m.WorksModule),
    pathMatch: 'full',
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
