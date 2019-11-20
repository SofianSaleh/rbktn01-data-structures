var Queue = function() {
var i = 0;

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  
  someInstance.enqueue = function(value) {

    storage[i] = value;
    i++
  };

   someInstance.dequeue = function() {
  var temp = storage[0];
  delete storage[0];
   for (var k = 0; k < i; k++) {
        storage[k] = storage[k+1];
    }
    if(i > 0){
      i--
    }
    return temp
  };

  someInstance.size = function() {
    return i;

  };

  return someInstance;
};
