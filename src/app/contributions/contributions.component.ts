import { Component, OnInit } from '@angular/core';
import { Contribution, contributions } from './contributions';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.less'],
})
export class ContributionsComponent {
  public contributions = contributions.sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );
}
