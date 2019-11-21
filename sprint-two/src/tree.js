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

treeMethods.contains = function(target, child) {
	for (var i = 0; i < this.children.length; i++) {
	
	 for(var key in this.children) {
	 	if(this.children[i].value === target) {
	 		return true;
	 	}
	 }
	for(var j = 0; j < this.children[i].length; j++){
		console.log(this.children[i].children[j].value)
	
		 for(var keys in this.children[i][j]){

			if(this.children[i].children[j].value === target){
				return true
			}
		}
	}
	}
	var i = 0
	return false
}
//

/*
 * Complexity: What is the time complexity of the above functions?
 */
