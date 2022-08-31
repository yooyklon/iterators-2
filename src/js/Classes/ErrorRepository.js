export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(404, 'Запрашиваемый ресурс не найден');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
