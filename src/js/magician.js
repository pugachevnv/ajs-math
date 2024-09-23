import Character from "./character";

export default class Magician extends Character {
    constructor(name) {
        super(name, 'Magician'); 
        this.attack = 10;
        this.defence = 40;

        this._stoned = false;
    }

    get stoned() {
        return this._stoned;
    }
    set stoned(value) {
        this._stoned = value;
    }

    getAttack() {
        let result = this.attack * (1 - (this.distance - 1) * 0.1);
        if (this._stoned) {
            result -= Math.log2(this.distance) * 5;
        }
        return  result > 0 ? Math.round(result) : 0;
    }

}