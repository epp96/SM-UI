import { MentalAttributes } from './MentalAttributes';

export class Skills {
    attack: Number;
    defense: Number;
    mental: MentalAttributes;
    constructor(attack:Number, defense:Number, mental: MentalAttributes) {
        this.attack = attack;
        this.defense = defense;
        this.mental = mental;
    }
}