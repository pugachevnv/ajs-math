import Bowman from "../bowman";

test('Правильно создается объект', () => {
    const bowman = new Bowman('Alex');
    const correct = {   
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Bowman'
    };
    expect(bowman).toEqual(correct);
})