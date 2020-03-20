import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';

import { AppCommonModule } from 'app/common/common.module';

@NgModule({
  imports: [CommonModule, WorksRoutingModule, AppCommonModule],
  declarations: [WorksComponent],
})
export class WorksModule {}
