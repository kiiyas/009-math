import Magician from '../magician';

test('Must correctly create Magician character object', () => {
  const expected = {
    name: 'magi',
    type: 'Magician',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    dope: false,
    distance: 1,
  };
  expect(new Magician('magi', 'Magician')).toEqual(expected);
});

test('Must correctly create Magician character object when in arguments there is only name', () => {
  const expected = {
    name: 'magi',
    type: 'Magician',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    dope: false,
    distance: 1,
  };
  expect(new Magician('magi')).toEqual(expected);
});

test('Should set stoned', () => {
  expect(new Magician('magi').stoned = true).toBe(true);
});

test('Should get stoned', () => {
  const magician = new Magician('magi');
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
});

test('Should get attack', () => {
  const testChar = new Magician('magi');
  testChar.attack = 100;
  testChar.stoned = true;
  testChar.distance = 1;
  expect(testChar.attack).toBe(100);
});

test('Should get attack', () => {
  const testChar = new Magician('magi');
  testChar.attack = 100;
  testChar.stoned = true;
  testChar.distance = 2;
  expect(testChar.attack).toBe(85);
});

test('Should get attack with value = 0, if final attack < 0', () => {
  const testChar = new Magician('magi');
  testChar.attack = 5;
  testChar.stoned = true;
  testChar.distance = 5;
  expect(testChar.attack).toBe(0);
});
