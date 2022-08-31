export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже присутствует в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    const member = Array.from(this.members);
    for (let i = 0; i < member.length; i += 1) {
      yield member[i];
    }
  }
}
