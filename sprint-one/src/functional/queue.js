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
    var temp;
   var objLength = Object.keys(storage).length
   var deleted = storage[0]
    delete storage[0]
    i--;
      if (storage[0] === undefined) { 
        for(var key in storage){
          temp = storage[key] 
          delete storage[key]
        }
       
    return deleted;
  //    return storage[1]
    }
  };

  someInstance.size = function() {
    var count = 0;
    for(var key in storage) {
      count++
    }
    return count;

  };

  return someInstance;
};
