var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = Node(value);

    if(this.head === null) {
      this.head = node;
      this.tail = node;
    }else if(this.tail === null){
      this.tail = node;
      this.tail.previous = this.head
      this.head.next = this.tail;
    }else{

    this.tail.next = node;
    node.previous = this.tail; 
    this.tail = node;
    }


    
  };

    list.addToHead = function(value) {

    var node = Node(value);

    if(this.tail === null) {
      this.head = node;
      this.tail = node;
    }else if(this.head === null) {
      this.head = node;
      this.head.next = this.tail;
      this.tail.previous = this.head;
    }else {
    this.head.previous = node;
    node.next = this.head; 
    this.head = node;

    }


    
  };

  list.removeHead = function() {
    var removed = this.head.value
    if(this.head.next === null) {
      this.head = null;
      this.tail = null;
    }else {
   this.head = this.head.next;
   this.head.previous = null;
    }
    return removed;
  };

  list.removeTail = function() {
    var removed = this.tail.value
    if(this.tail.previous === null) {
      this.tail = null;
      this.head = null;
    }else {
   this.tail = this.tail.previous;
   this.tail.next = null
    }
    return removed
  };

  list.contains = function(target) {
    
    var node = arguments.length === 2 ? arguments[1] : this.head

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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
