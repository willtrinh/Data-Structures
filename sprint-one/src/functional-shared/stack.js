var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    stackSize: 0
  };
  // copy methods into instance
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.stackSize++] = value;
  },
  pop: function() {
    if (this.stackSize > 0) {
      var poppedItem = this.storage[--this.stackSize];
      delete this.storage[this.stackSize];
      return poppedItem;
    }
  },
  size: function() {
    return this.stackSize;
  }
};


