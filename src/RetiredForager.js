var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.color = "grey";
  this.canFly = false;
};
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;


