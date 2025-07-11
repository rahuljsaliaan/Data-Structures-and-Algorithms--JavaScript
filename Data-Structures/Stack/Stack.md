# Stack

- A stack is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the last element added to the stack will be the first one to be removed.
- Insertion and removal of elements happen at the **top** of the stack.

## Stack Visualization

```mermaid
graph TD
    Last[Insertion/Removal Point Top] --> F[5]
    F --> E[4]
    E --> D[3]
    D --> C[2]
    C --> B[1]
    B --> First["Bottom"]
    size[Size: 5]

    style B fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style C fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style D fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style E fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style F fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style First fill:#fff,stroke:#333,stroke-width:2px,color:#000
    style Last fill:#fff,stroke:#333,stroke-width:2px,color:#000
    style size fill:#fff,stroke:#333,stroke-width:2px,color:#000
```

## Real-life Example

A common real-life example of a stack is a **stack of plates**. When you **add a plate** to the stack, you place it **on top**. When you need a plate, you take the one from the **top**. The **last plate added** is the **first one to be removed**, following the LIFO principle.

## Applications

- Expression evaluation
- Backtracking algorithms
- Function call management in programming language

## Stack Implementation

- Stacks can be implemented using **arrays**, where elements are added and removed from the end of the array using built-in methods like `push` and `pop`. [Stack using Array - Example](/Data-Structures/Stack/stackArray.js)
- Stacks can also be implemented using **objects (or classes)**, where you manually manage the storage and provide methods for stack operations. [Stack using Linked List - Example](/Data-Structures/Stack/stackLinkedList.js)
