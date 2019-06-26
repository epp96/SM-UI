import { Team } from './Team';


export class League {
    public teamList: Team[];
    public leagueRating: Number;
    constructor(teamList: Team[], leagueRating: Number) {
        this.teamList = teamList;
        this.leagueRating = leagueRating;
    }
}