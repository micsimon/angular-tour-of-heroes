import {NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from "@angular/router";
import {HeroesComponent} from "./component/heroes/heroes.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {HeroDetailComponent} from "./component/hero-detail/hero-detail.component";
import {HeroDetailGuardGuard} from "./guard/hero-detail/hero-detail-guard.guard";
import {LoadFormModuleGuard} from "./guard/load-form-module/load-form-module.guard";
import {CanDeactivateGuardGuard} from "./guard/can-deactivate-route/can-deactivate-guard.guard";

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent, canActivate: [HeroDetailGuardGuard]},
  {
    path: 'form',
    loadChildren: () => import('./module/form/form.module').then(module => module.FormModule),
    canLoad: [LoadFormModuleGuard], canDeactivate: [CanDeactivateGuardGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: NoPreloading})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
