import Team from '../js/Classes/Team';

import createCharacter from '../js/createCharacter';

const mag = createCharacter('Magician', 'Magician');
const zombie = createCharacter('Zombie', 'Zombie');
const demon = createCharacter('Demon', 'Demon');

describe('test Team Class', () => {
  test('Adding a character to the team', () => {
    const myTeam = new Team();

    myTeam.add(mag);

    expect(myTeam.toArray()).toEqual([mag]);
  });
  test('Error adding a character to the team', () => {
    const myTeam = new Team();

    myTeam.add(mag);

    expect(() => {
      myTeam.add(mag);
    }).toThrow('Такой персонаж уже присутствует в команде');
  });

  test('Checking the addition of several characters to the team', () => {
    const myTeam = new Team();

    myTeam.addAll(mag, zombie, demon);

    expect(myTeam.toArray()).toEqual([mag, zombie, demon]);
  });
});
