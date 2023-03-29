/**
 * [1641. 统计字典序元音字符串的数目](https://leetcode.cn/problems/count-sorted-vowel-strings/)
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    const dp = new Array(n).fill(0).map((_) => new Array(5).fill(1));
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < 5; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }

    return dp[n - 1].reduce((sum, i) => (sum += i), 0);
};

const { expect } = require('chai');
it('0', () => {
    expect(countVowelStrings(1)).to.eq(5);
    expect(countVowelStrings(2)).to.eq(15);
    expect(countVowelStrings(33)).to.eq(66045);
});
