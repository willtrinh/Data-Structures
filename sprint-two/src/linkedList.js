var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      var oldTail = list.tail;
      list.tail.next = node;
      list.tail = node;
      list.tail.previous = oldTail;
    }
  };

  // O(1)
  list.removeHead = function() {
    var removedValue = list.head.value;
    list.head = list.head.next;
    if (list.head) {
      list.head.previous = null;
    }
    return removedValue;
  };

  // O(1)
  list.addToHead = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      var oldHead = list.head;
      list.head.previous = node;
      list.head = node;
      list.head.next = oldHead;
    }
  };

  // O(1)
  list.removeTail = function() {
    var removedValue = list.tail.value;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return removedValue;
  };

  // O(n)
  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    } else {
      var currentNode = list.head.next;
      while (currentNode != null) {
        if (currentNode.value === target) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return false;
  };

  return list;
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