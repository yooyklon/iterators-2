export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Demon', 'Undead', 'Zombie'];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректное значение name - name не может быть меньше 2 или больше 10');
    }

    if (typeof type === 'string' && types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректно введено значение type');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack = (this.attack * 20) / 100;
      this.defence = (this.defence * 20) / 100;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
