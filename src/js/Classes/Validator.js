export default class Validator {
  constructor() {
    this.validateTest = /(?!.*(.)\1\1\1|.*(\d)\d\d\d)^(?:[A-Za-z][A-Za-z0-9-_]+)/;
  }

  validateUsername(name) {
    return this.validateTest.test(name);
  }
}
