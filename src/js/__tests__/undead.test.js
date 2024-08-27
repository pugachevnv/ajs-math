import Undead from "../undead";

test('Правильно создается объект', () => {
    const undead = new Undead('Alex');
    const correct = {   
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Undead'
    };
    expect(undead).toEqual(correct);
})