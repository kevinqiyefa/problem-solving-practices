// Description
// Write a function called addCommas, which takes in a number and returns a string which formats that number so that it has commas after every third digit to the left of the decimal point (i.e. normal US comma formatting).

// You can assume that all numbers are non-negative.

// Examples
// addCommas(1); // "1"

// addCommas(1000); // "1,000"

// addCommas(123456789); // "123,456,789"

// addCommas(3.141592); // "3.141592"

// addCommas(54321.99); // "54,321.99"

//solution #1
function addCommas(num) {
  let r = '';
  let str = num.toString().split('.');
  let p = str[0].split('');
  let count = 0;

  for (let i = p.length - 1; i >= 0; i--) {
    if (count === 3) {
      r = p[i] + ',' + r;
      count = 1;
    } else {
      ++count;
      r = p[i] + r;
    }
  }

  if (str[1]) r = r + '.' + str[1];

  return r;
}

//solution #2
/*
function addCommas(num) {
  let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  
}
*/
