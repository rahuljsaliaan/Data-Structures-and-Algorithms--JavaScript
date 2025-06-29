class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  _insertRecursive(node, val) {
    if (!node) {
      return new Node(val);
    }

    if (val === node.val) {
      return node;
    }

    if (val > node.val) {
      node.right = this._insertRecursive(node.right, val);
    } else {
      node.left = this._insertRecursive(node.left, val);
    }

    return node;
  }

  _traverseUsingQueueMethodRecursive(...queue) {
    if (!queue.length) return [];

    const node = queue.shift();

    if (!node) return [];

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    return [node.val, ...this._traverseUsingQueueMethodRecursive(...queue)];
  }

  insert(val) {
    this.size++;
    this.root = this._insertRecursive(this.root, val);
  }

  // Method 1
  traverseUsingQueueMethod() {
    const queue = [this.root];
    const values = [];
    while (queue.length > 0) {
      const node = queue.shift();
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return values;

    // NOTE: The best approach for the queue method is the iterative method than recursive method.
    // return this._traverseUsingQueueMethodRecursive(this.root);
  }
}

const tree = new Tree();

tree.insert(50);
tree.insert(20);
tree.insert(55);
tree.insert(66);

console.log(tree.traverseUsingQueueMethod());
