import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../model/Team';

@Injectable()
export class LeagueService {
    teams: Team[];
    constructor(private http: HttpClient) { }

    getTeamsFromLeague(league_id: string) {
        this.http.get('http://localhost:8080/league/' + league_id).subscribe((data:Team[]) => {
            
            this.teams = data;
            console.log(JSON.stringify(this.teams[0].teamName, null, 1));
        });
    }

}