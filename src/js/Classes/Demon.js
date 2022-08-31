import Character from './Character';

export default class Demon extends Character {
  constructor(name, type = 'Demon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
