import Undead from '../undead';

test('Must correctly create Undead character object', () => {
  const expected = {
    name: 'und',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Undead('und', 'Undead')).toEqual(expected);
});

test('Must correctly create Undead character object when in arguments there is only name', () => {
  const expected = {
    name: 'und',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Undead('und')).toEqual(expected);
});
