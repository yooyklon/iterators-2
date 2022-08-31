import Bowman from './Classes/Bowman';
import Swordsman from './Classes/Swordsman';
import Magician from './Classes/Magician';
import Undead from './Classes/Undead';
import Zombie from './Classes/Zombie';
import Demon from './Classes/Demon';

export default function createCharacter(name, type) {
  switch (type) {
    case 'Bowman':
      return new Bowman(name, type);
    case 'Swordsman':
      return new Swordsman(name, type);
    case 'Magician':
      return new Magician(name, type);
    case 'Undead':
      return new Undead(name, type);
    case 'Zombie':
      return new Zombie(name, type);
    case 'Demon':
      return new Demon(name, type);
    default:
      throw new Error('Некорректно введён класс');
  }
}
