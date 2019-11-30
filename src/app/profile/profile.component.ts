import { Component, OnInit } from '@angular/core';
import { EducationItem, educationItems } from './education-item';
import { ExperienceItem, experienceItems } from './experience-item';
import { newerFirst } from './newer-first';
import { SOCIAL_ITEMS, SocialItem } from './social-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent {
  public experienceItems: ExperienceItem[] = experienceItems.sort(newerFirst);
  public educationItems: EducationItem[] = educationItems.sort(newerFirst);
  public SOCIAL_ITEMS: SocialItem[] = SOCIAL_ITEMS;
}
