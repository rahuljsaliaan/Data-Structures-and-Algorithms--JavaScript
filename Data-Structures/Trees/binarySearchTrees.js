class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
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

  _findNodeRecursive(node, val) {
    if (!node) {
      return undefined;
    }

    if (val === node.val) {
      return node;
    }

    if (val > node.val) {
      return this._findNodeRecursive(node.right, val);
    }

    return this._findNodeRecursive(node.left, val);
  }

  _removeRecursive(node, val) {
    if (!node) return null;

    if (val === node.val) {
      if (!node.right && !node.left) {
        return null;
      }

      if (!node.right) {
        return node.left;
      }

      if (!node.left) {
        return node.right;
      }

      const successor = this._findMin(node.right);
      node.val = successor.val;
      node.right = this._removeRecursive(node.right, successor.val);
    }

    if (val > node.val) {
      node.right = this._removeRecursive(node.right, val);
    } else {
      node.left = this._removeRecursive(node.left, val);
    }

    return node;
  }

  _findMin(node) {
    if (!node.left) return node;

    return this._findMin(node.left);
  }

  _findSecondLargestRecursive(node, nextNode) {
    if (!nextNode.right) {
      return node;
    }

    return this._findSecondLargestRecursive(nextNode, nextNode.right);
  }

  _getNodeHeight(node) {
    if (!node) return -1;

    const left = this._getNodeHeight(node.left);
    const right = this._getNodeHeight(node.right);

    return 1 + Math.max(left, right);
  }

  _checkBalanced(node) {
    if (!node) return true;

    const left = this._getNodeHeight(node.left);
    const right = this._getNodeHeight(node.right);

    if (Math.abs(left - right) > 1) return false;

    return this._checkBalanced(node.left) && this._checkBalanced(node.right);
  }

  insert(val) {
    this.size++;
    const node = this._insertRecursive(this.root, val);
    this.root = node;
    return node;
  }

  find(val) {
    return this._findNodeRecursive(this.root, val);
  }

  remove(val) {
    this.size--;
    this.root = this._removeRecursive(this.root, val);
  }

  findSecondLargest() {
    if (this.size < 2) return undefined;

    if (!this.root.right) return this.root.left;

    return this._findSecondLargestRecursive(this.root, this.root.right);
  }

  isBalanced() {
    return this._checkBalanced(this.root);
  }
}

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(40);
bst.insert(45);
bst.insert(60);
bst.insert(70);
bst.insert(80);
// bst.insert(90);

console.log(bst);

const found_node = bst.find(40);

console.log(`Height of the node ${bst._getNodeHeight(found_node)}`);

// bst.remove(45);

console.log(bst);

console.log(bst.findSecondLargest());

console.log(`Is the tree balanced: ${bst.isBalanced()}`);
