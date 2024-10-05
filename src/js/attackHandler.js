export default class AttackHandler {

    static calculateAttack(baseAttack, distance, stoned) {
        let result = baseAttack * (1 - (distance - 1) * 0.1);
        if (stoned) {
            result -= Math.log2(distance) * 5;
        }
        return  result > 0 ? Math.round(result) : 0;
    }
}
