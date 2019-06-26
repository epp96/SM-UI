import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  league_id: string = '5cdb6288879e59fe25954fb0';
  constructor(public leagueService: LeagueService) { }

  ngOnInit() {
    this.leagueService.getTeamsFromLeague(this.league_id);
  }

}
