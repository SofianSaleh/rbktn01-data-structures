class BinarySearchTree {

constructor(value) {
	this.value = value;
	this.left  = null;
	this.right = null;
}

insert(value1){

	// var contain = arguments[1] || false;

	if(this.value > value1) {
	if(this.left == null) {
		// if(contain) return false;
		// else 
			this.left = new BinarySearchTree(value1);

	}else {
		// if(contain) return this.left.insert(value1, true)
		// else
		 this.left.insert(value1)
	}
}else if(this.value < value1) {
	if(this.right == null) {
		// if(contain) return false
		// else 
			this.right = new BinarySearchTree(value1);
	}else {
		// if(contain) return this.right.insert(value1, true)
		// else
		 this.right.insert(value1)
	}
}
// else if (this.value === value1 && contain) {
// 	return true
// }
}
contains(value) {
	if(this.value == value) return true
 	if(this.left && this.value > value) return this.left.contains(value)
 	if(this.right && this.value < value) return this.right.contains(value)
 	return false
// return this.insert(value, true)


}
depthFirstLog(cb) {
	cb(this.value)
 	if(this.left) this.left.depthFirstLog(cb)
 	if(this.right) this.right.depthFirstLog(cb)
 	
}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

