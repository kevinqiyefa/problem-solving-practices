// Debouncing delays execution of a function until a specified time has elapsed since its last invocation.
// it is a technique that ensures a function only runs after a certain amount of time has passed since the last call.

// Example:
// const debouncedFunction = debounce(function() {
//   console.log('Function called');
// }, 1000);

// debouncedFunction();
// debouncedFunction();
// After 1000ms, the function will be called once.

// Implementation:
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }