import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(
  ) { }

  public get isRoot(): boolean {
    // Router's url isn't resolved just after visited, so use window.location.pathname
    return window.location.pathname === '/';
  }

  ngOnInit() {
  }

}
