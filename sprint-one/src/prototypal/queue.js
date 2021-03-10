var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.first = 0;
  instance.last = 0;
  instance.queueSize = 0;

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


