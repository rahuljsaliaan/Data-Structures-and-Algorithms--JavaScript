# Linked List

- A Data Structure that contains a **head**, **tail** and **length** property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null.

## Types of Linked List

1. **Singly Linked List**: The most simple type of Linked List where each node points only to the next node. [Singly Linked List. Example](/Data-Structures/Linked-List/singlyLinkedList.js)

2. **Doubly Linked List**: A more complex type where each node points both to the next node and the previous node. [Doubly Linked List. Example](/Data-Structures/Linked-List/doublyLinkedList.js)

3. **Circular Linked List**: A variation where the list is looped back onto itself by having the last node point back to the first node.

## Singly Linked List

A Singly Linked List is a type of data structure that is made up of nodes that are created using self referential structures. Each node contains a data element and a reference (link) to the next node in the sequence.

- **Traversal**: Singly linked lists can only be traversed in one direction, from the head node to the tail node. Searching for and accessing a value or node is done in O(n) time complexity.

- **Memory Utilization**: Singly linked lists are more memory efficient than arrays when dealing with items that are inserted in the middle of the list. This is because it does not require shifting elements over, like in an array.

- **Insertion and Deletion**: Insertion of a new node is quite efficient, done at O(1) if we have the reference to the head of the list. However, deletion of a node can be done in O(n) in the worst case, as we may need to traverse the entire list to find the node that is to be deleted.

- **Use Cases**: Singly linked lists are useful in creating simple data structures such as stacks and queues. They are also used in scenarios where memory is a constraint.

The main disadvantage of a singly linked list is that it cannot be traversed in reverse. For operations that require reverse traversal, a doubly linked list is a more suitable data structure.

[Singly Linked List. Example](/Data-Structures/Linked-List/singlyLinkedList.js)

## Doubly Linked List

A Doubly Linked List is a type of data structure that is made up of nodes that are created using self referential structures. Each node contains a data element and references (links) to both the next and the previous node in the sequence.

- **Traversal**: Doubly linked lists can be traversed in both directions, from the head node to the tail node and vice versa. This makes some operations more efficient, as they can be performed from the end of the list as well as the beginning. Searching for and accessing a value or node is done in O(n) time complexity.

- **Memory Utilization**: Doubly linked lists use more memory than singly linked lists because they need to store an extra reference to the previous node. However, they can still be more memory efficient than arrays when dealing with items that are inserted or removed in the middle of the list.

- **Insertion and Deletion**: Insertion and deletion of a new node are quite efficient, done at O(1) if we have the reference to the node before or after which we want to perform the operation. However, finding the correct position can take O(n) in the worst case, as we may need to traverse the list.

- **Use Cases**: Doubly linked lists are useful in creating more complex data structures such as caches and navigational components. They are also used in scenarios where reverse traversal is required.

The main disadvantage of a doubly linked list is that it uses more memory than a singly linked list due to the extra reference in each node.

[Doubly Linked List. Example](/Data-Structures/Linked-List/doublyLinkedList.js)
