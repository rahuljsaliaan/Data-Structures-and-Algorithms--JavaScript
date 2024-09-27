const stack = [];

// Stack implementation using push and pop

// DESC: Pushing elements to the stack
stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.log(stack);

// DESC: Popping elements from the stack
stack.pop();

console.log(stack);

// Stack implementation using shift and unshift

// DESC: Pushing elements to the stack (using unshift)
stack.unshift("linkedin");

console.log(stack);

// DESC: Popping elements from the stack (using shift)
stack.shift();

console.log(stack);
