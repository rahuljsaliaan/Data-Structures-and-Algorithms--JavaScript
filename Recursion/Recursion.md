# Recursion

## Definition

A process (a function in this case) that calls itself

## UseCases

- JSON.parse / JSON.stringify
- document.getElementById and DOM Traversal
- Object traversal
- More complex Data Structures
- Alternative to iteration

## The Call Stack

- It's a stack data structure
- Any time a function is invoked it is placed (pushed) on top of the call stack
- When JavaScript sees return keyword or when the function ends, the compiler will remove (pop) the function from the call stack

[CallStack](/Recursion/CallStack.js)

## Important Concepts

- Base Case: The condition when the recursion ends. (A return statement is a must in the base case).
- Different Input: Each call of the function should be with different piece(s) of data (arguments).

## Common Recursion Pitfalls

- No base Cases / wrong base cases.
- Forgetting to return / returning a wrong thing. (Not having different input / having wrong input on each function call).
- Stack overflow!

## Helper Recursive function

- It is a function that is used inside another function as a helper function.
- It is useful when you want to create a variable that should not reset on each function call.

[collectOddValues](/Recursion/collectOddValues.js)

## Pure Recursive function

- It is a independent function that solves the problem without any global variable or outer function

### Tips for using pure recursion

- For arrays use methods like slice, the spread operator and concat that makes copies of arrays so that you don't mutate them.
- Strings are immutable so you will use methods like slice, substr or substring to make copies of strings.
- To make copies of object use object.assign or the spread operator.
