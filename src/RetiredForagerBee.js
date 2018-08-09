class RetiredForagerBee extends Grub {
  // TODO..
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.food = 'jelly';
    this.treasureChest = [];
  }

  forage() {
    return "I am too old, let me play cards instead";
  }

  gamble(treasure) {
    this.treasureChest.push(treasure);
  }

};
