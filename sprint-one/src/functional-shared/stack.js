var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  
  var obj ={}
  obj.storage = {}
  extend(obj, stackMethods)
  return obj;
};

var extend = function(obj, methods) {
  for(var key in methods){
    obj[key] = methods[key]
  }
}


var stackMethods  = {
push : function(value){
  this.storage[value] = value;
},
size : function() {
  return Object.keys(this.storage).length


},
pop : function(){
  if (Object.keys(this.storage).length === 0) {
      return 0
    }
    var count = 0 , tmp;
    for(var key in this.storage){
      count++;
      if (count === Object.keys(this.storage).length ) {
        tmp = this.storage[key];
        delete this.storage[key];
        return tmp;
      }
    }
  }
}