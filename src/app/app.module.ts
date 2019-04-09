import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Root } from './root.component/root.component.component';
import { Nav } from './nav.component/nav.component.component';
import { Container } from './container.component/container.component.component';
import { Team } from './container.component/team.component/team.component.component';
import { League } from './container.component/league.component/league.component.component';
import { Market } from './container.component/market.component/market.component.component';
import { Stats } from './container.component/stats.component/stats.component.component';

@NgModule({
  declarations: [
    AppComponent,
    Root.ComponentComponent,
    Nav.ComponentComponent,
    Container.ComponentComponent,
    Team.ComponentComponent,
    League.ComponentComponent,
    Market.ComponentComponent,
    Stats.ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
