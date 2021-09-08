import Swordsman from '../swordsman';

test('Must correctly create Swordsman character object', () => {
  const expected = {
    name: 'swor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('swor', 'Swordsman')).toEqual(expected);
});

test('Must correctly create Swordsman character object when in arguments there is only name', () => {
  const expected = {
    name: 'swor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('swor')).toEqual(expected);
});
