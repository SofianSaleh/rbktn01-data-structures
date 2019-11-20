var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
var i = 0;
  // Implement the methods below
  someInstance.push = function(value) {
      storage[i] = value;
      console.log(storage)
      i++;
  };

  someInstance.pop = function() {
    var deleted =  storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    i--;
    return deleted;
  };

  someInstance.size = function() {
    var counter = 0;
      for(var keys in storage ){
        counter++;
      }
      return counter;
    };
  return someInstance;
};
