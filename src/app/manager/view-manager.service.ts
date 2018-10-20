import { Injectable } from '@angular/core';

@Injectable()
export class ViewManagerService {

  public screen: { width: number, height: number } = {
    width: 0,
    height: 0,
  };

  public offset: { x: number, y: number } = {
    x: 0,
    y: 0,
  };

  constructor(
  ) {
    this.bindEvents();
  }

  private bindEvents(): void {
    const self = this;

    self.setScreenSize();
    self.setPageOffset();

    window.addEventListener('resize', (event) => {
      self.setScreenSize();
    });

    window.addEventListener('scroll', (event) => {
      self.setPageOffset();
    });
  }


  setScreenSize(): void {
    const self = this;

    self.screen.width = window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || 0;
    self.screen.height = window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || 0;
  }

  setPageOffset(): void {
    const self = this;

    self.offset.x = window.pageXOffset;
    self.offset.y = window.pageYOffset;
  }
}
