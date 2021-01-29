function addNum(num1, num2) {
	//corner case
	if (!num1) return num2;
	if (!num2) return num1;

	let [intNum1, dec1 = ''] = num1.split('.');
	let [intNum2, dec2 = ''] = num2.split('.');

	let maxDecLen = dec1.length > dec2.length ? dec1.length : dec2.length;

	if (dec1 || dec2) {
		//make sure the 2 decimal have the same length
		while (dec1.length > dec2.length) {
			dec2 += '0';
		}

		while (dec1.length < dec2.length) {
			dec1 += '0';
		}
	}

	if (!dec1 && !dec2) {
		return addInt(intNum1, intNum2);
	}

	let temp = addInt(intNum1 + dec1, intNum2 + dec2);

	return temp.slice(0, temp.length - maxDecLen) + '.' + temp.slice(-maxDecLen);
}

function addInt(num1, num2) {
	let idx1 = num1.length - 1;
	let idx2 = num2.length - 1;

	let res = '';
	let carry = 0;

	while (idx1 >= 0 || idx2 >= 0 || carry) {
		let temp = 0;
		if (idx1 >= 0) {
			temp += +num1[idx1];
		}

		if (idx2 >= 0) {
			temp += +num2[idx2];
		}

		temp += carry;
		carry = temp >= 10 ? 1 : 0;
		let rem = temp % 10;

		res = rem + res;
		idx1--;
		idx2--;
	}

	return res;
}

addNum('3.94', '0.3'); //'4.24'
addNum('3', '0.3'); //'3.3'
addNum('3.123', '0.3'); // '3.423'
