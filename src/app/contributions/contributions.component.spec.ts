import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommonModule } from 'app/common/common.module';
import { ContributionsComponent } from './contributions.component';
import { GitHubIconComponent } from './github-icon.component';
import { UrlToRepositoryPipe } from './url-to-repository.pipe';

describe('ContributionsComponent', () => {
  let component: ContributionsComponent;
  let fixture: ComponentFixture<ContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppCommonModule],
      declarations: [
        ContributionsComponent,
        GitHubIconComponent,
        UrlToRepositoryPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
