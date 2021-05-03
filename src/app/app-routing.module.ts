import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SuperpowerDetailComponent } from './superpower-detail/superpower-detail.component';
import { SuperpowersComponent } from './superpowers/superpowers.component';

const routes: Routes = [
  {path: '', redirectTo: './dashboard', pathMatch:'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  //aangeven dat 'id' een variabele zal zijn en kan veranderen
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'superpowers', component: SuperpowersComponent},
  {path: 'superpowers/:id', component: SuperpowerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
