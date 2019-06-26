import { Skills } from './Skills';


export class Player {
    public name: string;
    public lastName: string;
    public gender: string;
    public region: string;
    public age: Number; //Math.floor(Math.random() * (40 - 17 + 1) ) + 17;
    public skills: Skills;
    public teamName: string;
    public team_id: any;
    public id: any; // TODO find how to get the type for ids in mongodb

    constructor(name: string,
        lastName: string,
        gender: string,
        region: string,
        age:Number,
        skills: Skills,
        teamName: string,
        team_id: string, 
        id: any) {

        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.region = region;
        this.age = age;//Math.floor(Math.random() * (40 - 17 + 1)) + 17;
        this.skills = skills;
        this.teamName = teamName;
        this.team_id = team_id;
        this.id = id;
    }
}