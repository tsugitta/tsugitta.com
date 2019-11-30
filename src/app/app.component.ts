import { Component, OnInit } from '@angular/core';
import { ViewManagerService } from './manager/view-manager.service';

declare var SmoothScroll: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private viewManager: ViewManagerService) {}

  public get isRoot(): boolean {
    // Router's url isn't resolved just after visited, so use window.location.pathname
    return window.location.pathname === '/';
  }

  public get showBackToTop(): boolean {
    return this.viewManager.offset.y > 80;
  }

  ngOnInit() {}

  public onPressBackToTop(): void {
    const scroll = new SmoothScroll();
    scroll.animateScroll(0);
  }
}
