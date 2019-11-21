class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {}
  	this.length = 0
  }
  push(value) {
  	 this.storage[this.length] = value;
  	 this.length ++
  }
  pop() {
  	if (this.length > 0) {
    this.length--;
    var trash = this.storage[this.length];
    delete this.storage[this.length];
    console.log(this.storage)
    return trash;
  }
  }
  size() {
  	return this.length
  }

}