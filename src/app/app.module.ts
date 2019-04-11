import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { LeagueComponent } from './league/league.component';
import { MarketComponent } from './market/market.component';
import { TeamComponent } from './team/team.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RootComponent,
    HeaderComponent,
    LeagueComponent,
    MarketComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
