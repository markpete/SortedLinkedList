[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/LwQz5aa6ked9L3S5xGXPjh/av9hHj7794ZSTU8tS2aif/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/LwQz5aa6ked9L3S5xGXPjh/av9hHj7794ZSTU8tS2aif/tree/master)
[![GitHub issues](https://img.shields.io/github/issues/markpete/SortedLinkedList.svg?maxAge=2592000)](https://github.com/markpete/SortedLinkedList/issues)
[![npm](https://img.shields.io/npm/dt/sorted-linked-list.svg?maxAge=2592000)](https://www.npmjs.com/package/sorted-linked-list)

[![npm](https://img.shields.io/npm/v/sorted-linked-list.svg?maxAge=2592000)](https://www.npmjs.com/package/sorted-linked-list)
[![npm](https://img.shields.io/npm/l/sorted-linked-list.svg?maxAge=2592000)](https://www.npmjs.com/package/sorted-linked-list)

# Sorted Linked List Library #
_This repository contains a library for managing a sorted, singly-linked, linked list.  The concept behind a linked-list is that developers can maintain an in-memory data structure to store a set of items without initially knowing the size and therefore without having to re-allocate arrays each time a limit is reached.  Furthermore in this implementation the overall sort is maintained on the data and as the list get large, it converts to a skip-list to improve performance._

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
### - toArray ###
Converts the LinkedList to an Array
```
var myArray = myList.toArray();
console.log(myArray.toString());
```