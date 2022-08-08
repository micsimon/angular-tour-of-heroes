import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeroFormComponent} from "./component/hero-form/hero-form.component";

const routes: Routes = [
  {path: '', component: HeroFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormRoutingModule {
}
