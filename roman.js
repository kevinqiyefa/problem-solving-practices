//2. Roman Numerals Helper
console.log('\n#2. Roman Numerals Helper');

class RomanNumerals {
  toRoman(num) {
    let roman = '';
    //list all the roman values
    let vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanN = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I'
    ];

    //ex:      58 -> 50 = 58-50= 8 -> 5 = 8-5=3
    // roman = '' ->  'L' ---------->'LV'--->'LVIII'

    for (let i = 0; i < vals.length; i++) {
      while (num >= vals[i]) {
        num -= vals[i];
        roman += romanN[i];
      }
    }
    return roman;
  }

  fromRoman(str) {
    let sybObj = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let ans = sybObj[str[str.length - 1]];

    //loop through the string from last index to 0 index,
    // if the previous roman value smaller than the current one,
    // then the total number - the previous one,
    // othervise total number + the previous one,
    for (let i = str.length - 1; i > 0; i--) {
      if (sybObj[str[i - 1]] < sybObj[str[i]]) {
        ans -= sybObj[str[i - 1]];
      } else {
        ans += sybObj[str[i - 1]];
      }
    }

    return ans;
  }
}
let rm = new RomanNumerals();

console.log(rm.toRoman(1990));
console.log(rm.toRoman(2008));
console.log(rm.fromRoman('MDCLXVI'));
