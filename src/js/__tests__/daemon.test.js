import Daemon from "../daemon";

test('Правильно создается объект', () => {
    const daemon = new Daemon('Alex');
    const correct = {   
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Daemon'
    };
    expect(daemon).toEqual(correct);
})