var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    const node = Node(value)

    if(this.head === null) {
      this.head = node;
      this.tail = node;

      return node
    }

    this.tail.next = node;
    this.tail = node;
    
  };


  list.removeHead = function() {
    var removed = this.head.value

   this.head = this.head.next;
   
    return removed
  };

  

  list.contains = function(target) {
    
    var node = arguments.length === 2? arguments[1] : this.head
    // console.log(arguments[1])
    if(node){
    if(node.value === target) return true;
    else {
    return this.contains(target, node.next)
    }
  }
    return false

  };

  return list;
  // O(n)
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
