import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroFormComponent} from "./component/hero-form/hero-form.component";
import {FormRoutingModule} from "./form-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeroFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule {
}
