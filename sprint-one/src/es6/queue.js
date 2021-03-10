class Queue {
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
