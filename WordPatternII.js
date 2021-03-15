// Word Pattern II

// Given a pattern and a string str, find if str follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

// Examples:
// pattern = "abab", str = "redblueredblue" should return true.
// pattern = "aaaa", str = "asdasdasdasd" should return true.
// pattern = "aabb", str = "xyzabcxzyabc" should return false.

var wordPatternII = function (pattern, str) {
	let hashMap = {};

	function dfs(pat, s, hm) {
		//check if both pat and str reach to the end
		if (pat.length === 0) {
			return s.length === 0;
		}

		//get the cur Char
		let curChar = pat[0];

		//check if cur char in hashmap
		if (curChar in hm) {
			// return false when str not starts with the exits word in hashmap
			if (!s.startsWith(hashMap[curChar])) return false;
			else {
				// if yes, then dfs the rest
				let word = hashMap[curChar];
				return dfs(pat.slice(1), s.slice(word.length), hm);
			}
		}

		//if cur not in hashmap, dfs + backtracking for each sub string
		for (let i = 1; i < s.length; i++) {
			let vals = Object.values(hm);
			let tempS = s.slice(0, i);
			//skip if temp exits in hashmap values
			if (vals.includes(tempS)) continue;

			hm[curChar] = tempS;
			//dfs the rest
			if (dfs(pat.slice(1), s.slice(tempS.length), hm)) return true;
			delete hm[curChar];
		}

		return false;
	}

	return dfs(pattern, str, hashMap);
};

wordPatternII('abab', 'rehirehi'); //true
wordPatternII('abba', 'hihahiha'); //false
wordPatternII('abba', 'hihahahi'); //true
wordPatternII('abba', 'bbbb'); //false
wordPatternII('abba', 'baab'); //true
