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
import { DropdownDirective } from './shared/dropdown.directive';
import { LeagueModule } from './league/league.modules';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RootComponent,
    HeaderComponent,
    // LeagueComponent,
    MarketComponent,
    TeamComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeagueModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
