// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(2) ==> 1
//   fib(5) ==> 5

function memFib(n, memo) {
  let result;
  if (memo[n]) return memo[n];

  if (n <= 2) result = 1;
  else result = memFib(n - 1, memo) + memFib(n - 2, memo);

  memo[n] = result;
  return result;
}

function fib(n) {
  const memo = Array(n);
  return memFib(n, memo);
}

fib(1000);
