import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './_app/app.component';
import {HeroesComponent} from './component/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {MessagesComponent} from './component/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./service/inmemory/in-memory-data.service";
import {HeroSearchComponent} from './component/hero-search/hero-search.component';
import {LoggingInterceptor} from "./interceptor/logging.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
