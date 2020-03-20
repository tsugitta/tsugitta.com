import { Component, OnInit } from '@angular/core';
import { Contribution, works } from './works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.less'],
})
export class WorksComponent {
  public works = works.sort((a, b) => (a.date < b.date ? 1 : -1));
}
