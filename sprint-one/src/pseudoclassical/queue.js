var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.first = 0;
  this.last = 0;
  this.queueSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last++] = value;
  this.queueSize++;
},
Queue.prototype.dequeue = function(value) {
  if (this.queueSize > 0) {
    var removedItem = this.storage[this.first];
    delete this.storage[this.first++];
    this.queueSize--;
    return removedItem;
  }
},
Queue.prototype.size = function(value) {
  return this.queueSize++;
};



