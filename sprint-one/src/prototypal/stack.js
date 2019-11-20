var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.size = 0;
  this.storage = {};
};
var stackMethods = {};

Stack.prototype.push = function(value) {
  this.storage[this.size] = value;
  this.size++;
};

Stack.prototype.pop = function() {
  while(this.size > 0) {
    var temp = this.storage[this.size - 1];
    this.size --;
    return temp;
  }
};

Stack.prototype.getsize = function() {
  return this.size;
};



