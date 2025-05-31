const queue = [];

// DESC: Standard function to add and remove items from the queue
// Function to add an element to the queue at the rear end (push)
queue.push("First");
queue.push("Second");
queue.push("Third");

console.log(queue);

// Function to remove an element from the queue from the front end (pop)
// NOTE: This method is not performative as adding items at the front end side will re-index the array
queue.shift();
queue.shift();
queue.shift();

console.log(queue);

// DESC: Other methods to add and remove items from the queue

// Function to add an element to the queue at the front end (unshift)
// NOTE: This method is not performative as adding items at the front end side will re-index the array
queue.unshift("First");
queue.unshift("Second");
queue.unshift("Third");

console.log(queue);

queue.pop();

console.log(queue);
