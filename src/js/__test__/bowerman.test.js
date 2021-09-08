import Bowerman from '../bowerman';

test('Must correctly create Bowerman character object', () => {
  const expected = {
    name: 'bow',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowerman('bow', 'Bowerman')).toEqual(expected);
});

test('Must correctly create Bowerman character object when in arguments there is only name', () => {
  const expected = {
    name: 'bow',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowerman('bow')).toEqual(expected);
});
