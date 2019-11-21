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
    // O(1)
  };

  list.removeHead = function() {
    var removed = this.head.value

    delete this.head.value
    
    if(this.head.value === undefined){
      this.head.value = this.tail.value
     
    }

    return removed
    // O(1)
  };

  list.contains = function(target) {

    for(var key in this.head) {
      if(target === this.head.value || target === this.head.next.value) {
        return true
      }
        return false
    }
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
