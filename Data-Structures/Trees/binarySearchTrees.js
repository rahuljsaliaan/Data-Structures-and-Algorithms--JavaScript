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

  insert(val) {
    this.root = this._insertRecursive(this.root, val);
  }

  find(val) {
    return this._findNodeRecursive(this.root, val);
  }

  remove(val) {
    this.root = this._removeRecursive(this.root, val);
  }
}

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(40);
bst.insert(45);

console.log(bst);

console.log(bst.find(45));

bst.remove(45);

console.log(bst);
