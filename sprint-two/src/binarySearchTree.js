class BinarySearchTree {



constructor(value) {
	this.value = value;
	this.left  = null;
	this.right = null;
	this.nodes = [];
	// this.parent = null;
}

insert(value1){

	if (this.nodes.length == 0) this.nodes.push(this.value)

	// this.nodes.push(new BinarySearchTree(value1))
	
			this.nodes.push(value1)
			this.nodes.sort((a,b) => a - b)
			// this = null
			this.restructurin(true)
			// var object = this.restructurin()
			// this.value = object.value
			// this.left  = object.left
			// this.right  = object.right
			// console.log(this, object)
	


	
	// this = this.restructurin()

// 	var child = new BinarySearchTree(value1)
		
// 	// this.nodes.push(child);
// 	// var contain = arguments[1] || false;

// 	if(this.value > value1) {
// 	if(this.left == null) {
// 		// if(contain) return false;
// 		// else 

// 			this.left = child;
// 			child.parent = this;
// 			if(this.parent) return child;
// 			else this.nodes.push(child)

// 	}else {
// 		// if(contain) return this.left.insert(value1, true)
// 		// else
// 		if(this.parent) return this.left.insert(value1) 
// 		else this.nodes.push(this.left.insert(value1))
// 	}
// }else if(this.value < value1) {
// 	if(this.right == null) {
// 		// if(contain) return false
// 		// else 
// 			this.right = child;
// 			child.parent = this;
// 			if(this.parent) return child;
// 			else this.nodes.push(child)
// 	}else {
// 		// if(contain) return this.right.insert(value1, true)
// 		// else
// 		 if(this.parent) return this.right.insert(value1) 
// 		 else this.nodes.push(this.right.insert(value1))

// 	}
// }
// else if (this.value === value1 && contain) {
// 	return true
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

restructurin(parent,start = 0,end = this.nodes.length - 1) {
	// this.nodes = this.nodes.sort((a, b) => a.value - b.value)
	if(parent) var tree = this
	if(start === end){
		// this.nodes[end].left = null;
		// this.nodes[end].right = null;
		return new BinarySearchTree(this.nodes[end]) ;
	} 
	if(start > end) return null;
	var mid = Math.floor((end + start) / 2);
	if (!parent) var tree = new BinarySearchTree(this.nodes[mid]);
    else tree.value = this.nodes[mid]
	// tree.left = null;
	// tree.right = null;
	if(mid !== end){
	tree.right = this.restructurin(false,mid + 1, end)
	}
	if(mid !== start) {
	tree.left = this.restructurin(false,start, mid - 1)
	}
	return tree

}

// sorter(){
// 	for (var i = 0; i < this.nodes.length; i++) {
// 		for (var j = 0; j < this.nodes.length -1 - i; j++) {
// 			if(this.nodes[j].value > this.nodes[j + 1].value){
// 				var temp = this.nodes[j]
// 				this.nodes[j] = this.nodes[j+1]
// 				this.nodes[j+1]= temp


// 			}

			
// 		}
// 	}
// }



};




/*
 * Complexity: What is the time complexity of the above functions?
 */

