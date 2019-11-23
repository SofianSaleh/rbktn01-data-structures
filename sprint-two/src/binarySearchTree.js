class BinarySearchTree {
constuctor(value) {
	this.value = value;
	this.left  = null;
	this.right = null;
}

insert(value1){
		console.log('should be 5 ' + this.value)
	if(this.value > value1) {
	if(this.value === null) {
		this.left = new BinarySearchTree(value);
	}else {
		this.left.insert(value1)
	}
}else if(this.value < value1) {
	if(this.value === null) {
		this.right = new BinarySearchTree(value1);
	}else {
		this.right.insert(value1)
	}
}
}
contains(value) {

}
depthFirstLog(cb) {
	
}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

