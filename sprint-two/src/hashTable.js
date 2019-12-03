

var HashTable = function() {
  this._limit = 8;
  this._mainLimit = this._limit
  this._storage = LimitedArray(this._limit);
  this.elements = 0;
};

HashTable.prototype.insert = function(k, v) {
 var index = getIndexBelowMaxForKey(k, this._limit);
 // if it there is no value in the index push an empty arry inside the index.
// console.log(this._storage.storage)
 // console.log(this._storage.storage)
 // if(this._storage.storage.length < this._limit - 1) {
 // 	this._limit += 1;
 // }
 // 	console.log(this._limit)
  if(!this._storage.get(index)){
    var arr = []
    this._storage.set(index, arr);
  }
// Check if the key exists if true  then go to else
  if(!this.retrieve(k)){
// If the the array is empty push the value and the key.
    this._storage.get(index).push([k, v])
    // console.log(this.elements, this._storage)
    this.extend("up")

  }else{
  var helper = this._storage.get(index);
    for(var i = 0; i < helper.length; i++){
      if(helper[i][0]===k)
        helper[i][1] = v;
      }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var helper = this._storage.get(index);
  for(var i = 0; i < helper.length; i++){
   	//console.log(helper[i])
  	if(helper[i][0] === k){
  		return helper[i][1]
  	}
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
   var index = getIndexBelowMaxForKey(k, this._limit);
  var helper = this._storage.get(index);
 // if (this._storage.storage.length < this._limit - 1) {
 // 	this._limit = 8;
 // }
	for(var i = 0; i < helper.length; i++){
  	if(helper[i][0] === k){
  		helper.splice(i,1)
      console.log('hello')
      this.extend("down")
    }
  }
};
HashTable.prototype.extend = function(status) { 
  this.case = false
  if(status == "up"){
    this.elements++;
    this.case = this.elements == 0.75 * this._limit
  } else if (status == "down"){
    this.elements--;
    this.case = this.elements == 0.25 * this._limit && this._limit != this._mainLimit
  }

  if(this.case) {
    var old = this._storage
    this._limit = status == "up"? this._limit * 2 : this._limit / 2
    this._storage = LimitedArray(this._limit);
    this.elements = 0
    old.storage.forEach(one => { 
      one.forEach(two =>  this.insert(two[0],two[1]))
    })
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

// else if(this.elements === 0.25 * this.limit) {
//     this.limit / 2
//   }
