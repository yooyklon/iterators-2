import clearMobileNumber from '../js/clearMobileNumber';

test('editing the entered phone number', () => {
  expect(clearMobileNumber('8 (927) 000-00-00')).toBe('+79270000000');
  expect(clearMobileNumber('+7 960 000 00 00')).toBe('+79600000000');
  expect(clearMobileNumber('+86 000 000 0000')).toBe('+860000000000');
});
