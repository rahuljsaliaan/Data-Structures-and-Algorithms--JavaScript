# Linked List

- A Data Structure that contains a **head**, **tail** and **length** property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null.

## Types of Linked List

1. **Singly Linked List**: The most simple type of Linked List where each node points only to the next node. [Singly Linked List. Example](/Data-Structures/LinkedList/singlyLinkedList.js)

2. **Doubly Linked List**: A more complex type where each node points both to the next node and the previous node.

3. **Circular Linked List**: A variation where the list is looped back onto itself by having the last node point back to the first node.

## Singly Linked List

A Singly Linked List is a type of data structure that is made up of nodes that are created using self referential structures. Each node contains a data element and a reference (link) to the next node in the sequence.

- **Traversal**: Singly linked lists can be traversed in only one direction, from the head node to the last node (tail).

- **Memory Utilization**: Singly linked lists are more memory efficient than arrays when dealing with items that are inserted in the middle of the list. This is because it does not require shifting elements over, like in an array.

- **Insertion and Deletion**: Insertion and deletion of a node are quite efficient. Insertion of a new node is done at O(1) if we have the reference to the head of the list, while deletion of a node can be done in O(1) if we have the reference to the node that is to be deleted.

- **Use Cases**: Singly linked lists are useful in creating simple data structures such as stacks and queues. They are also used in scenarios where memory is a constraint.

The main disadvantage of a singly linked list is that it cannot be traversed in reverse. For operations that require reverse traversal, a doubly linked list is a more suitable data structure.

[Singly Linked List. Example](/Data-Structures/LinkedList/singlyLinkedList.js)
