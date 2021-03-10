var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize++] = value;
  };

  someInstance.pop = function() {
    // check if stack is empty before pop
    if (stackSize > 0) {
      var popValue = storage[--stackSize];
      delete storage[stackSize];
      return popValue;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
