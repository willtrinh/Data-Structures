var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

// O(n)
setPrototype.add = function(item) {
  if (!this.storage.includes(item)) {
    this.storage.push(item);
  }
};

// O(n)
setPrototype.contains = function(item) {
  return this.storage.includes(item);
};

// O(n)
setPrototype.remove = function(item) {
  var index = this.storage.indexOf(item);
  this.storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
