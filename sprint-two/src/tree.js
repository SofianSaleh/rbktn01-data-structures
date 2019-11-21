var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(new Tree(value));

};

treeMethods.contains = function(target) {
	
	function search(main) {
		var truthyValues = false
	console.log(main.value)
		if(main.value === target) {
			return true;
		}
		if(main.children.length === 0) {
			return false;
		}
		_.each(main.children, function(one) {
			if(search(one)) {
				truthyValues = true
			}
		})
		return truthyValues
	}
	return search(this)

}


/*
 * Complexity: What is the time complexity of the above functions?
 */