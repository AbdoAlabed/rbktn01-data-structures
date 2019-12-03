var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = DNode(value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
      list.tail.prev = node;
    }
  };

  list.removeHead = function() {
    if(this.head === null){
      return;
    }
    var removed = list.head;
    list.head = list.head.next;
    list.head.prev = null;
    return removed.value;
  };

  list.contains = function(target) {
    var listHolder = list.head;
    while(listHolder !== null){
      if(listHolder.value === target)
        return true;
      listHolder = listHolder.next;
    }
    return false;
  };

  return list;
};

var DNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 */