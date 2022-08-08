import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./component/heroes/heroes.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {HeroDetailComponent} from "./component/hero-detail/hero-detail.component";

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'form', loadChildren: () => import('./module/form/form.module').then(module => module.FormModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
