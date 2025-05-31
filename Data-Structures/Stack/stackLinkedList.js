class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.front = null;
    this.end = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.front) {
      this.front = node;
    } else {
      this.end.next = node;
    }

    this.end = node;
    this.size++;

    return node;
  }

  pop() {
    let current = this.front;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.end = newTail;
    this.end.next = null;
    this.size--;

    if (this.size == 0) {
      this.front = this.end = null;
    }

    return current;
  }

  getPrintableStack() {
    let stackStr = "";

    let current = this.front;

    while (current) {
      stackStr += `[${current.val}]-->`;
      current = current.next;
    }

    stackStr += "(null)";

    return stackStr;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(45);
stack.push(50);

console.log(stack.getPrintableStack());

stack.pop();

console.log(stack.getPrintableStack());
