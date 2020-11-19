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
- [Heap](#heap)
- [Hashing](#hashing)
- [Graph](#graph)
- [Algorithms](#algorithms)
- [Bitmasks](#bitmasks)
- [Runtime Analysis](#runtime-analysis)

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

## Linked List

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

## Stack

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

## Queue

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

## Priority Queue

- Priority queue is an Abstract Data Type (ADT) that operates similar to normal queue except that **each element has a certain priority**. The priority of the elements in the priority queue determine the order in which elements are removed from the PQ.
- Priority queues only support **comparable data**, meaning data inserted into PQ must be able to be ordered from least to greatest or vice versa.

## Tree

- A tree is an undirected, connected, acyclic graph.

## Binary Tree

## Binary Search Tree

## Trie

## Heap

- A heap is a tree based data structure that satisfies the **heap invariant** (also called heap property): If A is a parent node of B then A is ordered with respect to B for all nodes A, B in the heap.

## Hashing

## Graph

## Algorithms

## Bitmasks

## Runtime Analysis
