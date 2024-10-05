import Character from "./character";
import AttackHandler from "./attackHandler";

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

    get attack() {
        return  AttackHandler.calculateAttack(this._attack, this.distance, this._stoned);
    }

    set attack(damage) {
        this._attack = damage;
    }

}