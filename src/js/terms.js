import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.dope = false;
    this.distance = 1;
  }

  set stoned(value) {
    this.dope = Boolean(value);
  }

  get stoned() {
    return this.dope;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    let finalAttack = ((100 - (this.distance - 1) * 10) / 100) * this.baseAttack;
    if (this.stoned) {
      finalAttack -= Math.log2(this.distance) * 5;
    }
    return finalAttack > 0 ? Math.round(finalAttack) : 0;
  }
}
