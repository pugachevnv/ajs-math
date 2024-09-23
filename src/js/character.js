export default class Character {
    constructor(name, type) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie'
        ];
        
        if (typeof name !== 'string') {  
            throw new Error('Имя персонажа должно быть строкой');
        }

        if (name.length < 2 || name.length > 10) {  
            throw new Error('Имя персонажа должно быть не менее 2 и не более 10 символов');
        }
                
        if (!types.includes(type)) {
            throw new Error('Такого перcонажа нет в списке'); 
        }
                    
        this.type = type;
        this.name = name;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;

        this.distance = 1;
    }

    levelUp() {
        if (this.health !== 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error ('Нельзя повысить уровень умершего');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        } else {
            throw new Error ('Нельзя нанести урон умершему');
        }
    }
}
