import Character from '../character';

test('Правильно создается объект', () => {
    const warrior = new Character('Alex', 'Bowman');
    const correct = {    
        attack: undefined,
        defence: undefined,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Bowman'
    };
    expect(warrior).toEqual(correct);
});

test('Ошибка в name, не является строкой', () => {
    expect(() => new Character(123, 'Bowman')).toThrow('Имя персонажа должно быть строкой');
});

test('Ошибка в name, менее 2 сиволов', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя персонажа должно быть не менее 2 и не более 10 символов');
});

test('Ошибка в name, более 10 символов', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя персонажа должно быть не менее 2 и не более 10 символов');
});

test('Ошибка в type', () => {
    expect(() => new Character('Alex', 'Bow')).toThrow('Такого перcонажа нет в списке');
});

test('Попытка повысить уровень умершего', () => {
    const warriorDead = new Character('Alex', 'Bowman');
    warriorDead.health = 0;
    expect(() => warriorDead.levelUp()).toThrow('Нельзя повысить уровень умершего');
});

test('Правильно повышен уровень', () => {
    const warrior = new Character('Alex', 'Bowman');
    warrior.attack = 25;
    warrior.defence = 25;
    warrior.levelUp();
    const correct = {    
        attack: 30,
        defence: 30,
        health: 100,
        level: 2,
        name: 'Alex',
        type: 'Bowman'
    };
    expect(warrior).toEqual(correct);
});

test('Попытка нанести урон умершему', () => {
    const warriorDead = new Character('Alex', 'Bowman');
    warriorDead.health = -1;
    expect(() => warriorDead.damage()).toThrow('Нельзя нанести урон умершему');
});

test('Правильно нанести урон', () => {
    const warrior = new Character('Alex', 'Bowman');
    warrior.defence = 25;
    warrior.damage(10);
    const correct = {    
        attack: undefined,
        defence: 25,
        health: 92.5, // 100 - 10 * (1 - 25 / 100)
        level: 1,
        name: 'Alex',
        type: 'Bowman'
    };
    expect(warrior).toEqual(correct);
});