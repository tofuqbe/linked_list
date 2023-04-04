A linked list is a linear collection of data elements called nodes that “point” to the next node by means of a pointer.

Each node holds a single element of data and a link or pointer to the next node in the list.

A head node is the first node in the list, a tail node is the last node in the list. Below is a basic representation of a linked list:

[ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

For this assignment I chose to use classes.

I created two classes.

1. LinkedList class which will represent the full list.
2. Node class which two constructed properties: a value and a next pointer that links to the nextNode. Both are set as null by default.

Then I Built the following functions in the linked list class:

1. append(value) adds a new node containing value to the end of the list
2. prepend(value) adds a new node containing value to the start of the list
3. this.size returns the total number of nodes in the list
4. this.head returns the first node in the list
5. this.tail returns the last node in the list
6. atIndex(index) returns the node at the given index
7. pop() removes the last element from the list
8. contains(value) returns true if the passed in value is in the list and otherwise returns false.
9. find(value) returns the index of the node containing value, or null if not found.
10. toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format is as follows: ( value ) -> ( value ) -> ( value ) -> null

I then implemented two more methods:

1. insertAt(value, index) that inserts a new node with the provided value at the given index.
2. removeAt(index) that removes the node at the given index.

Finally I added a test file using jest where I created many tests to ensure the methods weren't creating unintended side affects, had protocol for edge cases and worked harmoniously together.

I used npm test --watch to untediously update the tests.
