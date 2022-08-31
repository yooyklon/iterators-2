import Settings from '../js/Classes/Settings';

describe('test Settings Class', () => {
  test('', () => {
    const resultMap = new Map();
    resultMap.set('theme', 'blue');
    resultMap.set('music', 'pop');
    resultMap.set('difficulty', 'easy');

    const testMap = new Settings();
    testMap.userSettings.set('theme', 'blue');
    testMap.userSettings.set('music', 'pop');

    expect(testMap.settings).toEqual(resultMap);
  });
});
