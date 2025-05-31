class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);

    node.next = this.front;
    this.front = node;

    if (!this.end) {
      this.end = node;
    }

    this.size++;

    return node;
  }

  dequeue() {
    let current = this.front;
    let newEnd = current;

    while (current.next) {
      newEnd = current;
      current = current.next;
    }

    this.end = newEnd;
    this.end.next = null;
    this.size--;

    if (this.size == 0) {
      this.front = this.end = null;
    }

    return current;
  }

  getPrintableQueue() {
    let queueStr = "";

    let current = this.front;

    while (current) {
      queueStr += `[${current.val}]-->`;
      current = current.next;
    }

    queueStr += "(null)";

    return queueStr;
  }
}

const queue = new Queue();

queue.enqueue(30);
queue.enqueue(99);
queue.enqueue(15);

console.log(queue.getPrintableQueue());

queue.dequeue();

console.log(queue.getPrintableQueue());
