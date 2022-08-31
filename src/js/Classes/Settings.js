export default class Settings {
  constructor() {
    this.defaultSettings = new Map();

    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    this.userSettings = new Map();
  }

  get settings() {
    const resultMap = this.defaultSettings;

    for (const key of this.userSettings.keys()) {
      resultMap.set(key, this.userSettings.get(key));
    }

    return resultMap;
  }
}
