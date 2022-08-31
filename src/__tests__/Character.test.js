import Magician from '../js/Classes/Magician';
import Demon from '../js/Classes/Demon';
import Swordsman from '../js/Classes/Swordsman';
import Undead from '../js/Classes/Undead';
import Zombie from '../js/Classes/Zombie';
import Bowman from '../js/Classes/Bowman';

import createCharacter from '../js/createCharacter';

const SuperMag = new Magician('Супер маг');
const undead = new Undead('Нежить');
const devil = new Demon('Дьявол');
const blade = new Swordsman('Клинок');
const dead = new Zombie('Мертвец');
const arrow = new Bowman('Стрела');

const mag = new Magician('Маг');
mag.levelUp();

const throwLevelUp = new Magician('Маг');
throwLevelUp.damage(167);

describe('test Character Class', () => {
  test('creating a magician character', () => {
    expect(createCharacter('Супер маг', 'Magician')).toEqual(SuperMag);
  });
  test('creating a Undead character', () => {
    expect(createCharacter('Нежить', 'Undead')).toEqual(undead);
  });
  test('creating a Demon character', () => {
    expect(createCharacter('Дьявол', 'Demon')).toEqual(devil);
  });
  test('creating a Swordsman character', () => {
    expect(createCharacter('Клинок', 'Swordsman')).toEqual(blade);
  });
  test('creating a Zombie character', () => {
    expect(createCharacter('Мертвец', 'Zombie')).toEqual(dead);
  });
  test('creating a Bowman character', () => {
    expect(createCharacter('Стрела', 'Bowman')).toEqual(arrow);
  });

  test('Invalid type value', () => {
    expect(() => {
      const throwType = new Magician('Name', 'Magician1');
      return throwType;
    }).toThrow('Некорректно введено значение type');
  });

  test('Invalid name value', () => {
    expect(() => {
      const throwName = new Magician('Очень длинное имя персонажа');
      return throwName;
    }).toThrow('Некорректное значение name - name не может быть меньше 2 или больше 10');
  });

  test('Invalid class input', () => {
    expect(() => {
      const undeadError = createCharacter('Нежить', 'Undeadd');
      return undeadError;
    }).toThrow('Некорректно введён класс');
  });

  test('Сhecking the error of raising the level', () => {
    expect(() => {
      throwLevelUp.levelUp();
    }).toThrow('Нельзя повысить левел умершего');
  });
});
