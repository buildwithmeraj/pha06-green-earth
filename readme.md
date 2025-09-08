**Q.** What is the difference between var, let, and const?  
**Answer:**  
**`var`** Has function scope. If it is declared outside a function, it becomes a global variable. It can be reassigned and redeclared.  
**`let`** Has block scope. it is only accessible within the block it is defined in. It can be reassigned, but cannot be redeclared in the same scope.  
**`const`** Has block scope. Cannot be reassigned and cannot be redeclared. It must be assigned a value at the moment of declaration. It ias also only accessible within the block it is defined in like `let`.
  
**Q** What is the difference between map(), forEach(), and filter()?  
**Answer:**  **`map()`** is used to create a new array by applying a transformation function to every element in the original array. The new array will always be the same length as the original.  We use `map()` when we want to transform an array of data into a new array of data like: converting an array of objects to an array of specific properties, formatting data etc.  
**`forEach()`** is used to execute a function for each element in the array. It's used for its side effects, not for transforming data or creating a new value. It's bascially needed for doing loop and do something with each item like: console.log, update the UI, make an API call for each item, etc.  
**`filter()`** is used to create a new array with all elements that pass a test (provided by a callback function). It's used for filtering out unwanted items. We use it when we need to select a subset of data from an array based on a condition (e.g., getting all users who are admins, finding all products above a certain price).

**Q** What are arrow functions in ES6?  
**Answer:**  Arrow functions are a powerful tool for writing cleaner, more predictable code, especially when dealing with callbacks and preserving the this context. We often use it for short callback functions (e.g., in map, filter, reduce, forEach, setTimeout). 

**Q** How does destructuring assignment work in ES6?  
**Answer:**  

**Q** Explain template literals in ES6. How are they different from string concatenation?
**Answer:**  