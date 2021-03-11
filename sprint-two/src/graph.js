

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
// O(1)
Graph.prototype.addNode = function(node) {
  var nodeObj = {
    edges: [],
    value: node
  };
  this.nodes.push(nodeObj);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// O(n)
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
// O(n)
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    }
  }
  for (currentNode in this.nodes) {
    this.removeEdge(node, currentNode);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// O(n)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var foundToNode = false;
  var foundFromNode = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      foundToNode = this.nodes[i].edges.includes(toNode);
    }
    if (this.nodes[i].value === toNode) {
      foundFromNode = this.nodes[i].edges.includes(fromNode);
    }
  }
  return (foundFromNode && foundToNode);
};

// Connects two nodes in a graph by adding an edge between them.
// O(n)
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edges.push(toNode);
    }
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
// O(n)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      var index = this.nodes[i].edges.indexOf(toNode);
      this.nodes[i].edges.splice(index, 1);
    }
    if (this.nodes[i].value === toNode) {
      var index = this.nodes[i].edges.indexOf(fromNode);
      this.nodes[i].edges.splice(index, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
// O(n)
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


