

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = []
  if(this._storage[index] === undefined){
  	arr.push(v)
   this._storage[index] = [v,arr];
  }else{
  	
  }
  console.log(this._storage)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//  for(var i =0; i)
  return this._storage[index];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  delete this._storage[index]

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


