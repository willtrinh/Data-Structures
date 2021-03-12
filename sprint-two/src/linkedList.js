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
      list.tail.next = node;
      list.tail = node;
    }
  };

  // O(1)
  list.removeHead = function() {
    var removedValue = list.head.value;
    list.head = list.head.next;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */