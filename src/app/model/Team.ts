export class Team {
    teamName: string;
    manager: string;
    manager_id: any; // TODO find how to get the type for ids in mongodb
    points: Number;
    league_id: any; // TODO find how to get the type for ids in mongodb
    id: any; // TODO find how to get the type for ids in mongodb

    constructor(teamName: string, manager:string, manager_id: any, 
        points: Number, league_id: any, id: any) {
            this.teamName = teamName;
            this.manager = manager;
            this.manager_id = manager_id;
            this.points = points;
            this.league_id = league_id;
            this.id = id;
    }
}