import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

import { ToMMMYYYYPipe } from './to-mmm-yyyy.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
    ToMMMYYYYPipe,
  ],
})
export class ProfileModule { }
