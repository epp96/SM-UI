import { NgModule } from '@angular/core';
import { LeagueComponent } from './league.component';
import { LeagueService } from '../services/league.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LeagueComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [LeagueService],
//   bootstrap: [AppComponent]
})
export class LeagueModule { }