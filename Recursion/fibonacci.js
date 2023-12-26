function fibonacci(num) {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4));

/* 
input: 4
output: 4 

CALL SEQUENCE
                                                        fibonacci(4)
                                                             |
                                                             |
                                              ------------------------------
                                             |                             |
                                       fibonacci(3)                   fibonacci(2)
                                            |                             |
                                    ----------------              ----------------       
                                   |               |             |               |      
                              fibonacci(2)  fibonacci(1)    fibonacci(1)    fibonacci(0)
                                  |                             
                          ---------------- 
                         |               |
                    fibonacci(1)    fibonacci(0)

*/
