
var Tree = function(value) {
  var newTree = {};
  newTree.value = value || null;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value) {
	var tree = new Tree(value)

	this.children.push(tree);
	tree.parent = this;
};

treeMethods.traverse = function (callback) {
	// var newTree = arguments[1] || new Tree(callback(this.value));
	this.value = callback(this.value);
	for(var i = 0; i < this.children.length; i++) {

		// this.children[i].value = callback(this.children[i].value);
		// var child = newTree.children[i];

		this.children[i].traverse(callback);

	}
}

treeMethods.contains = function(target) {
function search(main) {
	var isFound = false;
	if(main.value === target) {
		return true;
	}
	if (main.children.length === 0) {
		return false;
	}
	_.each(main.children, function(child) {
			if (search(child)) {
				isFound = true;
			}
		});
	return isFound;
	}
	return search(this)
}

treeMethods.removeFromParent = function() {
	this.parent.children.splice(this.parent.children.indexOf(this),1)
	this.parent = null;

};
//

/*
 * Complexity: What is the time complexity of the above functions?
 */