import MathCharacter from './terms';

export default class Daemon extends MathCharacter {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
