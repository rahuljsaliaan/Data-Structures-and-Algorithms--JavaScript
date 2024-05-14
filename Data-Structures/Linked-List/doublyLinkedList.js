class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  pop() {
    if (!this.head) return undefined;

    const currentNode = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = currentNode.prev;
      this.tail.next = null;
      currentNode.prev = null;
    }

    this.length--;
    return currentNode;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;

    return node;
  }

  shift() {
    if (!this.head) return undefined;

    const currentNode = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = currentNode.next;
      this.head.prev = null;
      currentNode.next = null;
    }

    this.length--;

    return currentNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let currentNode;

    if (index <= Math.floor(this.length / 2)) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }

    return currentNode;
  }

  set(index, val) {
    const currentNode = this.get(index);

    if (currentNode) {
      currentNode.val = val;
    }

    return currentNode;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    const beforeNode = this.get(index - 1);
    const node = new Node(val);
    const afterNode = beforeNode.next;

    node.next = afterNode;
    node.prev = beforeNode;
    beforeNode.next = node;
    afterNode.prev = node;

    this.length++;

    return node;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const currentNode = this.get(index);
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    currentNode.next = null;
    currentNode.prev = null;

    this.length--;

    return currentNode;
  }

  reverse() {
    if (this.length <= 1) return this;

    let currentNode = this.head;

    // Swap the head and tail
    [this.head, this.tail] = [this.tail, this.head];

    // Traverse the list and swap the next and prev pointers
    while (currentNode != null) {
      [currentNode.prev, currentNode.next] = [
        currentNode.next,
        currentNode.prev,
      ];
      currentNode = currentNode.prev;
    }

    return this;
  }
}

const list = new DoublyLinkedList();

list.push(20);
list.push(30);
list.push(40);
// list.insert(1, 99);
// list.remove(2);
// console.log(list.get(4));

console.log(list);

list.reverse();

console.log(list);
