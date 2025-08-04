// Throttling ensures a function executes at most once within a set time interval.

// Example:
// const throttledFunction = throttle(function() {
//   console.log('Function called');
// }, 1000);

// throttledFunction();
// throttledFunction();
// After 1000ms, the function will be called once.

// Implementation:

function throttle(func, limit) {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }