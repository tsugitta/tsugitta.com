import { Component, Input } from '@angular/core';
import { ContributionType } from './contributions';

@Component({
  selector: 'app-github-icon',
  template: '<img [src]="source" />',
})
export class GitHubIconComponent {
  @Input() type: ContributionType;

  public get source() {
    switch (this.type) {
      case 'Issue':
        return '/assets/icons/gh-issue-opened.svg';
      case 'ClosedIssue':
        return '/assets/icons/gh-issue-closed.svg';
      case 'PR':
        return '/assets/icons/gh-pull-request.svg';
      case 'MergedPR':
        return '/assets/icons/gh-merge.svg';
    }
  }
}
