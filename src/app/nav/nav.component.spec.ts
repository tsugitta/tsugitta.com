import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show nav items with correct path', () => {
    const navLinkCategoryNameTags = fixture.debugElement.queryAll(
      By.css('nav a .category-name'),
    );
    const categoryNames = navLinkCategoryNameTags.map(
      navLink => navLink.nativeElement.innerText,
    );
    expect(categoryNames).toEqual([
      'Profile',
      'Contributions',
      'Products (WIP)',
    ]);

    const hrefs = fixture.debugElement
      .queryAll(By.css('nav a'))
      .map(el => el.nativeElement.getAttribute('href'));
    expect(hrefs).toEqual(['/profile', '/contributions', '/products']);
  });
});
