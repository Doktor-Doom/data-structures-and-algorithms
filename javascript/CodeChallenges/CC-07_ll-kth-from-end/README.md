# CC-07: k-th value from the end of a linked list.

> Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

Example

ll.kthFromEnd(k)

Input ll	                                 Arg k	    Output
head -> [1] -> [3] -> [8] -> [2] -> X	     0	        2
head -> [1] -> [3] -> [8] -> [2] -> X	     2	        3
head -> [1] -> [3] -> [8] -> [2] -> X	     6	        Exception

Unit Tests

Where k is greater than the length of the linked list
Where k and the length of the list are the same
Where k is not a positive integer
Where the linked list is of a size 1
“Happy Path” where k is not at the end, but somewhere in the middle of the linked list
Unit tests must be passing before you submit your final solution code.

## CC=Code Challenge/Pair Programming

## Languages

## Solution
[WB] (Kth.jpg)

## Sources and credits

https://www.techiedelight.com/find-kth-node-from-the-end-linked-list/
https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54