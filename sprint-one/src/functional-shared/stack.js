var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var data = {};

  _.extend(data, stackMethods)
  return data;
};
var i = 0
var stackMethods = {
  
  push: function (value) {
    this.data[i] = value;
      console.log(this.data)
      i++;
  console.log(this.data)
  },
  pop: function () {
     var deleted =  this.data[Object.keys(this.data).length - 1];
    delete data[Object.keys(this.data).length - 1];
    i--;
    return deleted;
  },
  size: function () {
  var  counter = 0;
    for(var key in this.data){
      counter++;
    }
  return counter;
  }
}


