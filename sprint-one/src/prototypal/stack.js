var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.stackSize = 0;

  return instance;
};

var stackMethods = {
  size: function() {
    return this.stackSize;
  },
  push: function(value) {
    this.storage[this.stackSize++] = value;
  },
  pop: function() {
    if (this.stackSize > 0) {
      var poppedItem = this.storage[--this.stackSize];
      delete this.storage[this.stackSize];
      return poppedItem;
    }
  }
};


