/**
 * [2488. 统计中位数为 K 的子数组](https://leetcode.cn/problems/count-subarrays-with-median-k/)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    const idx = nums.indexOf(k);
    let count = 1;
    const map = {};

    for (let i = idx + 1, x = 0; i < nums.length; i++) {
        x += nums[i] > k ? 1 : -1;
        if (x === 0 || x === 1) {
            count++;
        }
        map[x] = ~~map[x] + 1;
    }

    for (let i = idx - 1, x = 0; i >= 0; i--) {
        x += nums[i] > k ? 1 : -1;
        if (x === 0 || x === 1) {
            count++;
        }
        count += ~~map[-x] + ~~map[-x + 1];
    }

    return count;
};

const { expect } = require('chai');
it('0', () => {
    expect(countSubarrays([3, 2, 1, 4, 5], 4)).to.eq(3);
    expect(countSubarrays([2, 3, 1], 3)).to.eq(1);
});
