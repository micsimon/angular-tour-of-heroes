import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './_app/app.component';
import {HeroesComponent} from './component/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {MessagesComponent} from './component/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
