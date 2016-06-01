[![build status](https://travis-ci.org/markpete/SortedLinkedList.svg?branch=master)](http://travis-ci.org/markpete/SortedLinkedList)

# Sorted Linked List Library #
_This repository contains a library for managing a sorted, singly-linked, linked list.  The concept behind a linked-list is that developers can maintain an in-memory data structure to store a set of items without initially knowing the size and therefore without having to re-allocate arrays each time a limit is reached.  Furthermore in this implementation the overall sort is maintained on the data._

### Installation ###
```
npm install sorted-linked-list
```
### Usage ###
```
var LinkedList = require('sorted-linked-list');
var myList = new LinkedList();
```
### Instantiation ###
The LinkedList can be instantiated with an optional parameter object to specify initial values of the list if needed.  The only currently implemented option is 'values', but this is designed to be extended over time.
```
var parameters = { values: ['cat', 'dog', 'liger', 'donkey']};
var myList = new LinkedList(parameters);
```
### Properties ###
### - head ###
The head properties returns the first node in the list in LinkedList.Node format.
```
myList.insert('first');
console.log(myList.head.data);
```
### - length ###
The length property returns the number of items in the list.
```
console.log(myList.length);
```
### Methods ###
### - insert ###
```
myList.insert('one');
```
Inserts a new item into the list.
```
myList.insert('dog');
myList.insert('cat');
myList.insert('monkey');
console.log(myList.head.data);
```
### - remove ###
Removes an item in a list if the target value is found.  Returns 'true' if an item was removed.
```
myList.insert('dog');
var isDeleted = myList.remove('dog');
```
### - clear ###
Empties an existing LinkedList
```
myList.insert('dog');
myList.insert('cat');
myList.insert('monkey');
myList.clear();
console.log(myList.length);
```
### - contains ###
Returns 'true' if the LinkedList contains the specified value.
```
myList.insert('dog');
var result = myList.contains('dog');
```
### - iterator ###
Provides a method to iterate through the items in the Linked List
```
var current = myList.iterator();
while(!(x = current.next()).done) {
   console.log(x.value);
};
```