class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.length = 0
  	this.storage = {}
  }
  push(value) {
  	 this.storage[value] = value;
  	 this.length ++
  }
  pop() {
  	if (this.length > 0) {
    this.length--;
    var trash = this.storage[this.length];
    delete this.storage[this.length];
    return trash;
  }
  }
  size() {
  	return this.length
  }

}