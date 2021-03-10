var Queue = function() {
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {};
  var queueSize = 0;
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last++] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    // check if queue is empty
    if (queueSize > 0) {
      var removedItem = storage[first];
      delete storage[first++];
      queueSize--;
      return removedItem;
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
