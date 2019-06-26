export class MentalAttributes {
    progression: Number;// Math.floor(Math.random() * 101),
    agressiveness: Number;// Math.floor(Math.random() * 101),
    loyalty: Number;//Math.floor(Math.random() * 101)
    constructor(progression:Number, agressiveness:Number, loyalty:Number) {
        this.progression = progression;
        this.agressiveness = agressiveness;
        this.loyalty = loyalty;
    }
}