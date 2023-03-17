/**
 * [2389. 和有限的最长子序列](https://leetcode.cn/problems/longest-subsequence-with-limited-sum/)
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    const n = nums.length;
    const m = queries.length;
    nums.sort((a, b) => a - b);

    const preSum = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        preSum[i] = ~~preSum[i - 1] + nums[i];
    }

    let answer = new Array(m).fill(0);
    for (let k = 0; k < m; k++) {
        const max = queries[k];

        let i = 0;
        let j = 0;
        while (i <= j) {
            if (preSum[j] - ~~preSum[i - 1] <= max) {
                answer[k] = Math.max(answer[k], j - i + 1);
                j++;
                continue;
            }
            i++;
        }
    }
    return answer;
};

const { expect } = require('chai');
it('0', () => {
    expect(answerQueries([4, 5, 2, 1], [3, 10, 21])).to.deep.eq([2, 3, 4]);
    expect(
        answerQueries(
            [736411, 184882, 914641, 37925, 214915],
            [331244, 273144, 118983, 118252, 305688, 718089, 665450]
        )
    ).to.deep.eq([2, 2, 1, 1, 2, 3, 3]);
});
