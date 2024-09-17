// TODO: write your code here
import sum from './basic';


console.log('worked');

console.log(sum([1, 2]));

import Character from './character';
import Bowman from './bowman';
import Magician from './magician';
import Swordsman from './swordsman';
import Team from './team';

const user1 = new Character('frick','Undead');
const user2 = new Bowman('moroz');
const user3 = new Magician('kakashka');
const user4 = new Swordsman('psihichka');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

const team = new Team();
team.add(user1);
team.addAll(user1, user2, user3, user4);
console.log(team);
console.log(team.toArray());
console.log(team.add(user1));

