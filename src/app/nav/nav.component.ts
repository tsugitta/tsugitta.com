import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NavigationItem, NAVIGATION_ITEMS } from './navigation-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  @Input() folded: boolean;
  public NAVIGATION_ITEMS = NAVIGATION_ITEMS;

  ngOnInit() {
  }

}
