class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = null;
    }

    return current;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  shift() {
    if (!this.head) return undefined;

    const current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) foundNode.val = val;

    return foundNode;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.unshift(val);

    if (index === this.length) return this.push(val);

    const prev = this.get(index - 1);
    const node = new Node(val);

    node.next = prev.next;
    prev.next = node;
    this.length++;

    return node;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;

    return removed;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = current.next;

    this.head = this.tail;
    this.tail = current;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(100);
list.push(1000);
// list.pop();
// list.unshift(1);
// list.shift();
// console.log(list.get(0));
// console.log(list.set(0, 55));
list.insert(1, 99);
// list.remove(0);

// list.reverse();

console.log(list);
