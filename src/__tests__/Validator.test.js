import Validator from '../js/Classes/Validator';

test('Testing the сharacter тame validator', () => {
  const validator = new Validator();

  expect(validator.validateUsername('Mag')).toBeTruthy();
  expect(validator.validateUsername('Ma_g')).toBeTruthy();
  expect(validator.validateUsername('m-ag')).toBeTruthy();
  expect(validator.validateUsername('M-_0g')).toBeTruthy();

  expect(validator.validateUsername('-Mag')).toBeFalsy();
  expect(validator.validateUsername('_Ma_g')).toBeFalsy();
  expect(validator.validateUsername('0m-ag')).toBeFalsy();
  expect(validator.validateUsername('M-_0000g')).toBeFalsy();
});
