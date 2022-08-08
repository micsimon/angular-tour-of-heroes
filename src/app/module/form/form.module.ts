import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroFormComponent} from "./component/hero-form/hero-form.component";
import {FormRoutingModule} from "./form-routing.module";


@NgModule({
  declarations: [
    HeroFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule {
}
