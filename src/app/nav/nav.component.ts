import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { navigationItems } from './navigation-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  @Input() folded: boolean;
  public navigationItems = navigationItems;

  ngOnInit() {}
}
