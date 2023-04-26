/**
 * [1031. 两个非重叠子数组的最大和](https://leetcode.cn/problems/maximum-sum-of-two-non-overlapping-subarrays/)
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
    const n = nums.length;
    const preSum = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        preSum[i] = preSum[i - 1] + nums[i - 1];
    }
    let max = 0;
    for (let i = 0; i <= n - firstLen; i++) {
        const firstSum = preSum[i + firstLen] - preSum[i];
        for (let j = 0; j <= n - secondLen; j++) {
            if (!(j + secondLen <= i || j >= i + firstLen)) {
                continue;
            }
            const secondSum = preSum[j + secondLen] - preSum[j];
            max = Math.max(max, firstSum + secondSum);
        }
    }
    return max;
};

const { expect } = require('chai');
it('0', () => {
    expect(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2)).to.eq(20);
    expect(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)).to.eq(29);
    expect(maxSumTwoNoOverlap([1, 0, 3], 1, 2)).to.eq(4);
});
