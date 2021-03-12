var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;
  _.extend(newTree, binarySearchTreeMethods);
  return newTree;
};
var binarySearchTreeMethods = {};

// O(n) worst case, O(logn) average
binarySearchTreeMethods.insert = function (value, childNode) {
  childNode = childNode ? childNode : this;
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value, this.right);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if (value < this.value) {
    if (this.left) {
      this.left.insert(value, this.left);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};

// O(n) worst case, O(logn) average
binarySearchTreeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }
  if (target < this.value) {
    return this.left !== null && this.left.contains(target);
  } else {
    return this.right !== null && this.right.contains(target);
  }
};

// O(n)
binarySearchTreeMethods.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
