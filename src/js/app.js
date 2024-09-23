// TODO: write your code here

import Magician from './magician';
import Daemon from './daemon';

const magician = new Magician('gendalf');
magician.attack = 100;
magician.distance = 2;
console.log(magician.getAttack());

magician.stoned = true;
console.log(magician.getAttack()); 

const daemon = new Daemon('sauron');
daemon.attack = 100;
daemon.distance = 5;
console.log(daemon.getAttack());

daemon.stoned = true;
console.log(daemon.getAttack()); 
