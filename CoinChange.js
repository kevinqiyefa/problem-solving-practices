// 322. Coin Change

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {

//     if(amount<1) return 0

//     let memo ={}
//     function helper(coinArr, target){

//         if(target in memo) return memo[target]

//         if(target===0){
//             memo[target] = 0
//             return 0;
//         }

//        let min = Infinity;

//         for(let c of coinArr){

//             if(target >= c) {

//                 let res = helper(coinArr,target-c)

//                 if(res !== -1){
//                      min = Math.min(min, res+1)
//                 }
//             }

//         }

//         if(min === Infinity){
//             memo[target] = -1
//             return -1
//         }
//         memo[target] = min
//         return min
//     }

//     return helper(coins, amount)

// };

var coinChange = function (coins, amount) {
	let dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 1; i <= amount; i++) {
		//for each amount, get the min number of coins.
		for (let c of coins) {
			// only check the coin that's less than the remainder amount
			if (i - c >= 0) {
				dp[i] = Math.min(dp[i], dp[i - c] + 1);
			}
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount];
};