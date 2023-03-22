/**
 * [1626. 无矛盾的最佳球队](https://leetcode.cn/problems/best-team-with-no-conflicts/)
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
    const n = scores.length;
    const arr = new Array(n).fill(0).map((_, i) => {
        return [scores[i], ages[i], true];
    });

    // 按照得分, 年龄排序
    arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    // dp
    const dp = new Array(n).fill(0);
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j][1] <= arr[i][1]) {
                dp[i] = Math.max(dp[i], dp[j]);
            }
        }
        dp[i] += arr[i][0];
        max = Math.max(max, dp[i]);
    }

    return max;
};

const { expect } = require('chai');
it('0', () => {
    expect(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5])).to.eq(34);
    expect(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])).to.eq(16);
    expect(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1])).to.eq(6);
});
