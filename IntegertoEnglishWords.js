// 273. Integer to English Words

// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

// Example 1:

// Input: 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  // 1 - 19
  let spcNums = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  let tens = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  let thousands = ['', 'Thousand', 'Million', 'Billion'];

  let res = '';

  if (num === 0) {
    return 'Zero';
  }

  let i = 0;

  function helper(n) {
    if (n < 20) {
      return spcNums[n];
    } else if (n < 100) {
      let d = (n / 10) >> 0;
      let noRem = n % 10 == 0;
      return noRem ? tens[d] : tens[d] + ' ' + helper(n % 10);
    } else {
      let h = (n / 100) >> 0;
      let space = n % 100 === 0 ? '' : ' ';
      return spcNums[h] + ' Hundred' + space + helper(n % 100);
    }
  }

  while (num > 0) {
    if (num % 1000 !== 0) {
      let n = (num / 1000) >> 0;

      res = helper(num % 1000) + ' ' + thousands[i] + ' ' + res;
    }
    num = (num / 1000) >> 0;
    i++;
  }

  return res.trim();
};
