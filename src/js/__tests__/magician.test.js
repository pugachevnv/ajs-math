import Magician from "../magician";

test('Правильно расчитывается атака без эффекта дурмана', () => {
    const magician = new Magician('Alex');
    magician.attack = 100;
    magician.distance = 5
    expect(magician.getAttack()).toBe(60);
})

test('Правильно расчитывается атака c эффектом дурмана', () => {
    const magician = new Magician('Alex');
    magician.attack = 100;
    magician.distance = 5;
    magician._stoned = true;
    expect(magician.getAttack()).toBe(48);
})