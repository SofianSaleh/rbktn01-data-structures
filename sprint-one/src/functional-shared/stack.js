var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
        var stack = {
        storage: {},
        };

    stack = _.extend(stack, stackMethods);
    return stack;
};

//extend methods to our stack object 

var stackMethods = {

    push: function(value) {
        this.storage[value] = value;
    },

    pop: function() {
      var returned = this.storage[Object.keys(this.storage).length - 1]
      delete this.storage[Object.keys(this.storage).length - 1]
      return returned
        
    },
    
    size: function() {
      console.log(this.storage)
      return Object.keys(this.storage).length
        // return this.length;
    }
};