import Daemon from '../daemon';

test('Must correctly create Daemon character object', () => {
  const expected = {
    name: 'dae',
    type: 'Daemon',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    dope: false,
    distance: 1,
  };
  expect(new Daemon('dae', 'Daemon')).toEqual(expected);
});

test('Must correctly create Daemon character object when in arguments there is only name', () => {
  const expected = {
    name: 'dae',
    type: 'Daemon',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    dope: false,
    distance: 1,
  };
  expect(new Daemon('dae')).toEqual(expected);
});

test('Should set stoned', () => {
  expect(new Daemon('dae').stoned = true).toBe(true);
});

test('Should get stoned', () => {
  const daemon = new Daemon('dae');
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
});

test('Should get attack', () => {
  const testChar = new Daemon('dae');
  testChar.attack = 100;
  testChar.stoned = true;
  testChar.distance = 1;
  expect(testChar.attack).toBe(100);
});

test('Should get attack', () => {
  const testChar = new Daemon('dae');
  testChar.attack = 100;
  testChar.stoned = true;
  testChar.distance = 2;
  expect(testChar.attack).toBe(85);
});

test('Should get attack with value = 0, if final attack < 0', () => {
  const testChar = new Daemon('dae');
  testChar.attack = 5;
  testChar.stoned = true;
  testChar.distance = 5;
  expect(testChar.attack).toBe(0);
});
