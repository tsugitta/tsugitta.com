import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCommonModule } from 'app/common/common.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, AppCommonModule],
  declarations: [ProfileComponent],
})
export class ProfileModule {}
