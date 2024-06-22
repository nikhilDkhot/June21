/*In synchronous programming, operations are performed one after another. Each operation must
 complete before the next one begins. This means that if an operation takes a long time, it
  blocks the execution of the following operations.
*/

/*In asynchronous programming, operations can be performed without waiting for other operations
 to complete. This allows for more efficient use of time, especially for tasks that take a long 
 time to complete, such as network requests or file operations.
*/ 

console.log('Start');

setTimeout(() => {
    console.log('Task Complete');
}, 2000); // Simulate a task that takes 2 seconds

console.log('End');
