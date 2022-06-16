import checkNumber from '../checkNumber';

test('test checkNumber: length card = 16', () => {
  const toBe = checkNumber('3455667');
  expect(toBe).toBeFalsy();
});

test('test checkNumber: lunaAlgoritm', () => {
  const toBe = checkNumber('4469157400108969');
  expect(toBe).toBeTruthy();
});

test('test checkNumber: lunaAlgoritm', () => {
  const toBe = checkNumber('4270000107108000');
  expect(toBe).toBeFalsy();
});