class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueSize = 0;
    this.storage = {};
    this.last = 0;
    this.first = 0;
  }

  enqueue(value) {
    this.storage[this.last++] = value;
    this.queueSize++;
  }

  dequeue() {
    if (this.queueSize > 0) {
      var removedItem = this.storage[this.first];
      delete this.storage[this.first++];
      this.queueSize--;
      return removedItem;
    }
  }

  size() {
    return this.queueSize;
  }
}
