import Swordsman from "../swordsman";

test('Правильно создается объект', () => {
    const swordsman = new Swordsman('Alex');
    const correct = {   
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Swordsman'
    };
    expect(swordsman).toEqual(correct);
})