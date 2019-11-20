var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instance = {
    head: 0,
    tail:0,
    storage: {}
  };

  _.extend(instance, stackMethods)
  return instance;
};
var i = 0
var stackMethods = {
  
  enqueue: function (value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function () {
    // if(this.head <= this.tail){
    //   var data = this.storage[this.head]
    //  var deleted =  this.storage[this.head];
    // this.head++
    // }
    // delete data
    var temp = this.storage[0];
  delete this.storage[0];
   for (var k = 0; k < i; k++) {
        this.storage[k] = this.storage[k+1];
    }
    if(i > 0){
      this.head--
    }
    return temp
  },
  size: function () {
  return this.tail - this.head;
  }
}


