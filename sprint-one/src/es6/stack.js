class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stackSize = 0;
  }

  size() {
    return this.stackSize;
  }

  push(value) {
    this.storage[this.stackSize++] = value;
  }

  pop() {
    if (this.stackSize > 0) {
      var poppedItem = this.storage[--this.stackSize];
      delete this.storage[this.stackSize];
      return poppedItem;
    }
  }
}