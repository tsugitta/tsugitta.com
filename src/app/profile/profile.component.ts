import { Component, OnInit } from '@angular/core';
import { compare } from './compare';
import { EDUCATION_ITEMS, EducationItem } from './education-item';
import { EXPERIENCE_ITEMS, ExperienceItem } from './experience-item';
import { SOCIAL_ITEMS, SocialItem } from './social-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  public EXPERIENCE_ITEMS: ExperienceItem[] = EXPERIENCE_ITEMS.sort(compare);
  public EDUCATION_ITEMS: EducationItem[] = EDUCATION_ITEMS.sort(compare);
  public SOCIAL_ITEMS: SocialItem[] = SOCIAL_ITEMS;

  constructor() {}

  ngOnInit() {}
}
