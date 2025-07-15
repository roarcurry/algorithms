/**
 * [1043. 分隔数组以得到最大和](https://leetcode.cn/problems/partition-array-for-maximum-sum/)
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    const n = arr.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let max = 0;
        for (let j = i; j > i - k && j > 0; j--) {
            max = Math.max(max, arr[j - 1]);
            dp[i] = Math.max(dp[i], dp[j - 1] + max * (i - j + 1));
        }
    }
    return dp[n];
};

const { expect } = require('chai');
it('0', () => {
    expect(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)).to.eq(84);
});
