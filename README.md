# Data-Structures

This repo includes some of the most common data structures and algorithms for learning purposes.

> In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

Source: [Wikipedia](https://en.wikipedia.org/wiki/Data_structure)

# Table of Contents

- [Array](#array)
- [Linked List](#linked-list)
- [Stack](#stack)
- [Queue](#queue)
- [Priority Queue](#priority-queue)
- [Tree](#tree)
- [Binary Tree](#binary-tree)
- [Binary Search Tree](#binary-search-tree)
- [Trie](#trie)
- [Fenwick Tree](#fenwick-tree)
- [Heap](#heap)
- [Hash Table](#hash-table)
- [Graph](#graph)
- [Sorting Algorithms](#sorting-algorithms)
- [Graph Algorithms](#graph-algorithms)
- [References](#references)

# Array

![Alt text](/img/array.jpg?raw=true "Array")

## Static Array

- Fixed length container _(cannot grow larger or smaller)_ containing n elements **indexable** from range [0, n-1]
- **indexable**: each slot/index in the array can be referenced with a number.
- When and where is static array used?
  - Used in storing/accessing sequential data
  - Temporarily storing objects
  - Used by IO routines as buffers
  - Lookup tables and inverse lookup tables
  - Used to return multiple values from a function
  - Used in dynamic programming to cache answers to subproblems.

## Dynamic Array

- Dynamic array can **grow** and **shrink** in size.
- One way to implement dynamic array:
  - Use static array with initial capacity.
  - Add elements to the array while keeping track of number of elements.
  - If adding another element exceeds capacity, create a new static array with twice the capacity and copy the original elements into it.
- Another way is to use built-in ArrayList in Java. (which is implemented using the above logic)

|        | Static Array | Dynamic Array |
| ------ | ------------ | ------------- |
| Access | `O(1)`       | `O(1)`        |
| Search | `O(n)`       | `O(n)`        |
| Insert | `N/A`        | `O(n)`        |
| Append | `N/A`        | `O(1)`        |
| Delete | `N/A`        | `O(n)`        |

# Linked List

- Linked list is a sequential list of nodes that hold data which point to other nodes also containing data.
- **Singly-linked list**: linked list in which each node points to the next node and the last node points to null.
  ![Alt text](/img/linked-list.png?raw=true "Linked List")
- **Doubly-linked list**: linked list in which each node has two pointers, one points to its previous node and one points to its next node.
  ![Alt text](/img/doubly-linked-list.png?raw=true "Doubly Linked List")
- **Circular-linked list**: linked list in which each node points to the next node and the last node points back to the first node.
- Time Complexity: (Singly & Doubly Linked)
  - Access: `O(n)`
  - Search: `O(n)`
  - Insert: `O(1)`
  - Remove: `O(1)`
    - Remove at tail: `O(n)` (Singly), `O(1)` (Doubly). -> Singly linked doesn't have pointer pointing to previous node while Doubly linked list has pointer pointing to its previous node.
- Where are linked lists used?
  - Used in many List, Queue, & Stack implementations due to great time complexity for adding and removing elements.
  - Creating circular lists (making the pointer of the last node points to the first node). i.e: repeating Round-Robin ordering,
  - Can easily model real world objects such as trains.
  - Used in separate chaining, which is present certain Hashtable implementations to deal with hashing collisions.
  - Often used in implementation of adjacency lists for graphs.
- Terminology:
  - **Head**: first node in a linked list
  - **Tail**: last node in a linked list
  - **Pointer**: reference to another node
  - **Node**: an object containing data and pointer(s).

|               | Pros                                       | Cons                                     |
| ------------- | ------------------------------------------ | ---------------------------------------- |
| Singly Linked | `Uses less memory, Simpler implementation` | `Cannot easily access previous elements` |
| Doubly Linked | `Can be traversed backwards`               | `Takes 2x memory`                        |

# Stack

![Alt text](/img/stack.png?raw=true "Stack")

- A stack is a one-ended linear data structure that has two primary operations, **_push_**, which adds to the collection, and **_pop_**, which removes the most recently added element from the collection.
- Modeled after **Last In First Out (LIFO)** structure: most recently added object is the first to be removed.
- Time Complexity:
  - Access: `O(n)`
  - Search: `O(n)`
  - Insert: `O(1)`
  - Remove: `O(1)`
- When and where is a stack used?
  - Used by undo mechanisms in text editors.
  - Used in compiler syntax checking for matching brackets and braces.
  - Used to model pile of books, plates, etc...
  - Used behind the scenes to support recursion by keeping track of previous function calls.
  - Can be used to do Depth First Search (DFS) on a graph.

# Queue

![Alt text](/img/queue.png?raw=true "Queue")

- A queue is a linear data structure which has two primary operations, **_enqueue_**, which inserts an element into the queue, and **_dequeue_**, which removes an element from the queue.
- **First In First Out (FIFO)** order: the oldest added object is the first to be removed.
- Time Complexity:
  - Access: `O(n)`
  - Search: `O(n)`
  - Insert: `O(1)`
  - Remove: `O(1)`
- When are where is a queue used?
  - Waiting line models a queue.
  - Can be used to keep track of the x most recently added elements.
  - Web server request management where you want first come first serve.
  - Breadth first search (BFS) graph traversal.

# Priority Queue

- Priority queue is an **Abstract Data Type (ADT)** that operates similar to normal queue except that **each element has a certain priority**. The priority of the elements in the priority queue determine the order in which elements are removed from the PQ.
- Priority queues only support **comparable data**, meaning data inserted into PQ must be able to be ordered from least to greatest or vice versa.
- When are where is PQ used?
  - Used in certain implementations of Dijkstra's Shortest Path algorithm.
  - To dynamically fetch the 'next best' or 'next worst' element.
  - Used in Huffman coding (lossless data compression).
  - A\* search algorithm uses PQs to continuously grab the next most promising node.
  - Used in Minimum Spanning Tree (MST) algorithms.
- Time Complexity:
  - Bineary Heap Construction: `O(n)`
  - Polling: `O(log(n))`
  - Peeking: `O(1)`
  - Adding: `O(log(n))`

# Tree

![Alt text](/img/tree.png?raw=true "Tree")

- A tree is an undirected, connected, acyclic (no cycles) graph.
- Unlike Array and Linked List, which are linear data structures, tree is hierarchical (or non-linear) data structure.
- Each node in a tree can only have 1 parent.
- Terminology:
  - **Leaf node**: node with no children.
  - **Subtree**: a tree entirely contained within another tree.
- **Full Tree**: a tree in which every node has either 0 or k-children.
- **Complete Tree**: a tree that every level of the tree is filled up except the final level which may or may not be filled up and if the final level has nodes, they should be filled up from left to right.
- **Perfect Tree**: a tree in which all interior nodes have two children and all leaves have the same depth. (tree is completely filled up).
- **Balanced Tree**: a tree that roughly maintains `O(logN)` time complexity if we traverse and picking 1 subtree at a time.

# Binary Tree

![Alt text](/img/binary-tree.png?raw=true "Binary Tree")

- A binary tree is a tree data structure in which each node has at most two children.
- When are where are Binary Trees used?
  - Binary Search Trees (BSTs)
    - Some `Map` and `Set` implementations.
    - Red Black Trees
    - AVL Trees
    - etc...
  - Binary heaps implementation.
  - Syntax trees (used by compiler and calculators).
  - Treap - a probabilistic DS (uses a randomized BST).

# Binary Search Tree

![Alt text](/img/bst.png?raw=true "Binary Search Tree")

- A binary search tree (BST) is a binary tree that satisfies the BST invariant: left subtree has smaller elements and right subtree has larger elements.
- Time Complexity:
  - Access: `O(log(n))`
  - Search: `O(log(n))`
  - Insert: `O(log(n))`
  - Remove: `O(log(n))`

\* In the worst case, time complexity for all operations is `O(n)`. i.e: when the generated tree appears to be a line.

## Tree Traversals:

![Alt text](/img/tree-traversals.png?raw=true "Tree Traversals")

- **preorder**: root -> left subtree -> right
- **inorder**: left subtree -> root -> right subtree
- **postorder**: left subtree -> right subtree -> root
- **level order**: print the nodes as they appear one layer at a time. (Do a BFS from the root node down to the leaf nodes).

# Trie

![Alt text](/img/trie.png?raw=true "Trie")

- A trie, sometimes called radix or prefix tree, is a search tree that is used to store a dynamic set or associative array where the keys are usually strings.

# Fenwick Tree

- Fenwick tree, also called a binary indexed tree, is a data structure that supports sum range queries as well as setting values in a static array and getting the value of the prefix sum up some index efficiently.
- Time Complexity:
  - Construction: `O(n)`
  - Point Update: `O(log(n))`
  - Range Sum: `O(log(n))`
  - Range Update: `O(log(n))`

# Heap

![Alt text](/img/heap.png?raw=true "Heap")

- A heap is a tree based data structure that satisfies the **heap invariant** (also called heap property): If A is a parent node of B then A is ordered with respect to B for all nodes A, B in the heap.
- Simply put, a heap can be classified as either a **max heap** or a **min heap**.
  - In a **max heap**, parent nodes are always greater than or equal to the children nodes.
  - In a **min heap**, parent nodes are always smaller than or equal to the children nodes.
- Time Complexity:
  - Access: `O(1)`
  - Insert: `O(log(n))`
  - Remove: `O(log(n))`

# Hash Table

![Alt text](/img/hash-table.png?raw=true "Hash Table")

- A **Hash Table (HT)** is a DS that provides a mapping from keys to values refer to as `key-value pairs` using a technique called **hashing**.
- Keys must be **unique** but values can be repeated.
- HTs are often used to track item frequencies. i.e.: counting the number of times a word appears in a given text.
- **Hash function** `H(x)`: is a function that maps a key `x` to a whole number in a fixed range.
  - Properties of Hash functions:
    - If `H(x) = H(y)`, then x and y might be equal, but if `H(x) != H(y)`, then x and y are `certainly not equal`
    - A hash function `H(x)` must be **deterministic**. This means that if H(x) = y then H(x) must **always** produce y and never another value.
    - A **hash collision** is when two objects x, y hash to the same value. (`H(x) = H(y)`)
- Collision Solusions:

  - **Separate Chaining**: deals with hash collisions by maintaining a data structure (usually a linked list) to hold all the different values which hashed to a particular value.

  ![Alt text](/img/separate-chaining.png?raw=true "Separate Chaining")

  - **Open Addressing**: deals with hash collisions by finding another place within the hash table for the object to go by offsetting it from the original position which it hashed to.

  ![Alt text](/img/open-addressing.png?raw=true "Open Addressing")

- Time Complexity:
  - Insert: `O(1)`
  - Remove: `O(1)`
  - Search: `O(1)`

# Graph

- A graph is a non-linear data structure consisting of a set of vertices (or nodes) and set of edges which connect a pair of nodes.
  ![Alt text](/img/graph.png?raw=true "Graph")
- **Undirected Graph**: a graph in which the adjacency relation is symmetric.
- **Directed Graph**: a graph in which the adjacency relation is not symmetric.

# Sorting Algorithms

## Sorting Algorithms Cheat Sheet

![Alt text](/img/sorting-complexity.png?raw=true "Sorting Algorithms Complexity")

## Quicksort

![Alt text](/img/quicksort.gif "Quicksort")

- Divide and conquer algorithm.
- Picks an element as pivot and partitions the given array around the picked pivot such that elements on the left half are smaller than pivot and elements on the right are greater than pivot.
- Different ways of picking pivot:
  - Pick first element.
  - Pick last element.
  - Pick random element.
  - Pick median as pivot.

## Heap Sort

![Alt text](/img/heapsort.gif "Heapsort")

- Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.

## Insertion Sort

![Alt text](/img/insertion-sort.gif "Insertion Sort")

- Insertion sort is a simple sorting algorithm that is relatively efficient for small lists and mostly sorted lists, and is often used as part of more sophisticated algorithms.
- It works by taking elements from the list one by one and inserting them in their correct position into a new sorted list

## Merge Sort

![Alt text](/img/merge-sort.gif "Merge Sort")

- Mergesort is a divide and conquer algorithm. It continuously divides an array into two halves, recurses on both the left subarray and right subarray and then merges the two sorted halves.

## Selection Sort

![Alt text](/img/selection-sort.gif "Selection Sort")

- Selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

1. The subarray which is already sorted.
2. Remaining subarray which is unsorted.

- In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

## Bucket Sort

![Alt text](/img/bucket-sort.gif "Bucket Sort")

- Bucket Sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.

## Radix Sort

- Radix Sort is a sorting algorithm that like bucket sort, distributes elements of an array into a number of buckets. However, radix sort differs from bucket sort by 're-bucketing' the array after the initial pass as opposed to sorting each bucket and merging.

# Graph Algorithms

## Depth First Search (DFS)

![Alt text](/img/dfs.gif "Depth First Search")

- Depth First Search is a graph traversal algorithm which explores as far as possible along each branch before backtracking
- Time Complexity: `O(|V| + |E|)`

## Breadth First Search (BFS)

![Alt text](/img/bfs.gif "Breadth First Search")

- Breadth First Search is a graph traversal algorithm which explores the neighbor nodes first, before moving to the next level neighbors.
- Time Complexity: `O(|V| + |E|)`

## Dijkstra's Algorithm

![Alt text](/img/dijkstra.gif "Dijkstra's Algorithm")

- Dijkstra's Algorithm is an algorithm for finding the shortest path from **one** node to all nodes. Doesn't allow negative weight edges.
- Time Complexity: `O(V^2)`

## Bellman-Ford Algorithm

![Alt text](/img/bellman-ford.gif "Bellman-Ford Algorithm")

- Bellman-Ford Algorithm is an algorithm that computes the shortest paths from **one** node to all nodes, negative edges **allowed**.
- Slower than Dijkstra's algorithm.
- Time Complexity:
  - Best: `O(E)`
  - Worst: `O(VE)`

## Prim's Algorithm

![Alt text](/img/prim.gif "Prim's Algorithm")

- Prim's Algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph. In other words, Prim's find a subset of edges that forms a tree that includes every node in the graph.
- Time Complexity: `O(V^2)`

## Floyd-Warshall Algorithm

- Floyd-Warshall Algorithm is an algorithm for finding the shortest paths between **all** pairs of vertices, negative edges **allowed**.
- Time complexity: `O(V^3)`

## Kruskal's Algorithm

![Alt text](/img/kruskal.gif "Kruskal's Algorithm")

- Kruskal's Algorithm is also a greedy algorithm that finds a minimum spanning tree in a graph. However, in Kruskal's, the graph does not have to be connected
- Time Complexity: `O(ElogV)`

# References

- `[Video]` [Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer](https://www.youtube.com/watch?v=RBSGKlAvoiM)

- `[Video Playlist]` [MIT Introduction to Algorithms](https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=1)

- `[Website]` [Sorting Algorithms Complexity & Visualization](http://www-scf.usc.edu/~zhan468/public/Notes/sorting.html)
- `[Website]` [VisuAlgo - visualising data structures and algorithms through animation](https://visualgo.net/en)
