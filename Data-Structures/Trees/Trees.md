# Trees

- A tree is a **hierarchical data structure (non-linear)** made up of **nodes**. Each node can have zero or more child nodes. There is exactly one **root node** (the topmost node). Each child node has exactly one parent, except for the root node, which has no parent.
- Trees are used to represent relationships where data is organized in a branching manner.
- In short, a tree is a non-linear data structure with a **parent/child relationship**.

```mermaid
flowchart TD
    A[Root]
    A --> B[Child 1]
    A --> C[Child 2]
    B --> D[Grandchild 1]
    B --> E[Grandchild 2]
    C --> F[Grandchild 3]
    style A fill:#fff,stroke:#333,stroke-width:2px,color:#000
    style B fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style C fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style D fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style E fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    style F fill:#bbf,stroke:#333,stroke-width:2px,color:#000
```

## Tree Terminology

- **Root** - The Top node in a tree.
- **Child** - A node directly connected to another node when moving away from the Root.
- **Parent** - The converse node of a child.
- **Siblings** - A group of nodes with the same parent.
- **Leaf** - A node with no children.
- **Edge** - The connection between one node and another.

## Real-life Example

- A **computer file system**, where **folders** contain **sub-folders** and **files**, starting from a **root directory**.
- A **school hierarchy**, where the **principal** is at the top, followed by **departments**, then **teachers**, and **students**.
- A **book’s table of contents**, where **chapters** branch into **sections** and **subsections**.

## Applications

- HTML Dom
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

## Variants

### Binary Search Tree

A **Binary Search Tree (BST)** is a special type of binary tree that maintains a specific order among its elements to allow efficient searching, insertion, and deletion. A BST follows these three important rules:

1. **Each node can have at most two children** (left and right).
2. **The left child of a node contains a value less than its parent node.**
3. **The right child of a node contains a value greater than its parent node.**

This structure ensures that for any node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. As a result, operations like search, insert, and delete can be performed efficiently, typically in O(log n) time for balanced trees.
