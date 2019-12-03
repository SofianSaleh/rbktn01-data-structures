var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {	
	item = typeof item == "object"?JSON.stringify(item) : item 
	this._storage[item] = item;
};

setPrototype.contains = function(item) {
	item = typeof item == "object"?JSON.stringify(item) : item 
	return this._storage[item] === item;
};
setPrototype.remove = function(item) {
	item = typeof item == "object"?JSON.stringify(item) : item 
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
