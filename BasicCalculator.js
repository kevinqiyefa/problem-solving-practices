// 224. Basic Calculator

// Given a string s representing an expression, implement a basic calculator to evaluate it.

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.

/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s) {

    let stack = [];
    let res = 0;
    let sign = 1;
    let i = 0;

    while(i < s.length){


        let cur = s[i]

        // ' '
        if( cur === ' '){
            i++;
        // digit
        } else if( cur >= '0' && cur <= '9'){
            let num = '';
            while(i < s.length &&  s[i] >= '0' && s[i] <= '9'){
                num += s[i]
                i++
            }

            res += sign * parseInt(num)

            // + 
        } else if(cur === '+'){
            sign = 1
            i++
        
        // -
        } else if(cur === '-'){
            sign = -1
            i++;

        // (
        } else if(cur === '('){
            stack.push(res)
            stack.push(sign)

            res = 0;
            sign = 1
            i++;
        // )
        } else if(cur === ')'){
            let prevSign = stack.pop();
            let prevSum = stack.pop()
            res = prevSum + res * prevSign
            i++;
        } 
        
    }

    return res
    
};



// var calculate = function (s) {
// 	let operator = '+';
// 	let stack = [];
// 	let numStr = '';

// 	for (let i = 0; i < s.length; i++) {
// 		let char = s[i];
// 		if (!isNaN(char)) {
// 			numStr += char;
// 		}

// 		if (char === '(') {
// 			let j = i + 1;
// 			let open = 1;
// 			while (open > 0) {
// 				if (s[j] === '(') {
// 					open++;
// 				} else if (s[j] === ')') {
// 					open--;
// 				}
// 				j++;
// 			}

// 			numStr = calculate(s.slice(i + 1, j - 1));
// 			i = j - 1;
// 		}

// 		if (char === '+' || char === '-' || i === s.length - 1) {
// 			if (operator === '+') {
// 				stack.push(+numStr);
// 			} else if (operator === '-') {
// 				stack.push(-numStr);
// 			}

// 			operator = char;
// 			numStr = '';
// 		}
// 	}

// 	return stack.reduce((total, curVal) => total + curVal, 0);
// };

// var calculate = function(s) {
//     let currentSegment = '';
//     let stack = [];
//     let sum = 0;

//     for(let c of s) {
//         if(c === ' ') continue;

//         else if(c === '(') {
//             // push current segment, begin new segment
//             stack.push(currentSegment);
//             currentSegment = '';
//         }
//         else if(c === ')') {
//             // handle current segment, pop old segment
//             let prevSegment = stack.pop();
//             let segmentValue = handleSegment(currentSegment);
//             currentSegment = prevSegment + String(segmentValue);
//         }
//         else {
//             currentSegment += c;
//         }
//     }

//     sum += handleSegment(currentSegment);
//     return sum;
// };

// var handleSegment = function(segment) {
//     let sum = 0;
//     let currentNumber = '';
//     let signModifier = 1;
//     let lastCharWasSub = false;

//     for(let c of segment) {
//         if(c === '+') {
//             sum += signModifier * Number(currentNumber);
//             signModifier = 1;
//             currentNumber = '';
//             lastCharWasSub = false;
//         }
//         else if(lastCharWasSub && c === '-') {
//             signModifier = signModifier * -1;
//             lastCharWasSub = true;
//         }
//         else if(c === '-') {
//             sum += signModifier * Number(currentNumber);
//             signModifier = -1;
//             currentNumber = '';
//             lastCharWasSub = true;
//         }
//         else  {
//             currentNumber += c;
//             lastCharWasSub = false;
//         }
//     }

//     return sum + (signModifier * Number(currentNumber));
// };
