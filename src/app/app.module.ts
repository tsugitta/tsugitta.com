import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ManagerModule } from './manager/manager.module';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, ManagerModule, NavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
