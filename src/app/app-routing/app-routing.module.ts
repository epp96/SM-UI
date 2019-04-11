import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LeagueComponent } from '../league/league.component';
import { MarketComponent } from '../market/market.component';
import { TeamComponent } from '../team/team.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/team', pathMatch: 'full' },
  { path: 'team', component: TeamComponent, children: [
    // { path: 'team', component: TeamComponent},
    // { path: 'new', component: RecipeEditComponent},
    // { path: ':id', component: RecepiesDetailComponent},
    // { path: ':id/edit', component: RecipeEditComponent},
  ] },
  { path: 'league', component: LeagueComponent  },
  { path: 'market', component: MarketComponent  }

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
