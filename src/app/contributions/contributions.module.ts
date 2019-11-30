import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContributionsRoutingModule } from './contributions-routing.module';
import { ContributionsComponent } from './contributions.component';
import { GitHubIconComponent } from './github-icon.component';

import { AppCommonModule } from 'app/common/common.module';
import { UrlToRepositoryPipe } from './url-to-repository.pipe';

@NgModule({
  imports: [CommonModule, ContributionsRoutingModule, AppCommonModule],
  declarations: [
    ContributionsComponent,
    GitHubIconComponent,
    UrlToRepositoryPipe,
  ],
})
export class ContributionsModule {}
