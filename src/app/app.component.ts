import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public get isRoot(): boolean {
    return this.router.url === '/';
  }

}
