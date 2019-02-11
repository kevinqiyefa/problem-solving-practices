// Check if a number can be expressed as x^y (x raised to power y)
// Given a positive integer n, find if it can be expressed as xy where y > 1 and x > 0. x and y both are integers.
// Examples :

// Input:  n = 8
// Output: true
// 8 can be expressed as 23

// Input:  n = 49
// Output: true
// 49 can be expressed as 72

// Input:  n = 48
// Output: false
// 48 can't be expressed as xy

function isPower(n) {
  // for(let x=2; x <= Math.sqrt(n); x++){
  //     for(let y = 2; Math.pow(x,y) <= n; y++){
  //       if(Math.pow(x,y)===n){
  //         return true;
  //       }
  //     }
  // }

  for (let i = 2; i * i <= n; i++) {
    let val = Math.log10(n) / Math.log10(i);
    let ans = val - (val >> 0);

    if (!ans) {
      return true;
    }
  }

  return false;
}

function printN() {
  for (let i = 2; i < 100; i++) {
    if (isPower(i)) {
      console.log(i);
    }
  }
  return 0;
}

printN();
