import Magician from "../magician";

test('Правильно создается объект', () => {
    const magician = new Magician('Alex');
    const correct = {   
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Magician'
    };
    expect(magician).toEqual(correct);
})