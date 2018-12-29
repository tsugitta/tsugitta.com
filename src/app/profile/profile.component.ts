import { Component, OnInit } from '@angular/core';
import { ExperienceItem, EXPERIENCE_ITEMS} from './experience-item';
import { EducationItem, EDUCATION_ITEMS} from './education-item';
import { compare} from './compare'
import { SocialItem, SOCIAL_ITEMS } from './social-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  public EXPERIENCE_ITEMS: ExperienceItem[] = EXPERIENCE_ITEMS.sort(compare);
  public EDUCATION_ITEMS: EducationItem[] = EDUCATION_ITEMS.sort(compare);
  public SOCIAL_ITEMS: SocialItem[] = SOCIAL_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
