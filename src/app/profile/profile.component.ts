import { Component, OnInit } from '@angular/core';
import { ExperienceItem, TO_DESC_EXPERIENCE_ITEMS } from './experience-item';
import { EducationItem, TO_DESC_EDUCATION_ITEMS } from './education-item';
import { SocialItem, SOCIAL_ITEMS } from './social-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  public EXPERIENCE_ITEMS: ExperienceItem[] = TO_DESC_EXPERIENCE_ITEMS;
  public EDUCATION_ITEMS: EducationItem[] = TO_DESC_EDUCATION_ITEMS;
  public SOCIAL_ITEMS: SocialItem[] = SOCIAL_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
