var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = [k, v];
  while (this._storage.get(index)) {
    if (this._storage.get(index)[0] === k) {
      break;
    }
    index++;
  }
  this._storage.set(index, arr);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  arr = this._storage.get(index);
  if (arr === undefined) {
    return undefined;
  }
  while (arr[0] !== k) {
    index++;
    arr = this._storage.get(index);
  }
  return arr[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, storage) {
    if (value) {
      if (value[0] === k) {
        delete storage[i];
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


