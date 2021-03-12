var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    first: 0,
    last: 0,
    queueSize: 0
  };
  // copy methods into instance
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last++] = value;
    this.queueSize++;
  },
  dequeue: function() {
    if (this.queueSize > 0) {
      var removedItem = this.storage[this.first];
      delete this.storage[this.first++];
      this.queueSize--;
      return removedItem;
    }
  },
  size: function() {
    return this.queueSize;
  }
};


