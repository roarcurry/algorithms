/**
 * [982. 按位与为零的三元组](https://leetcode.cn/problems/triples-with-bitwise-and-equal-to-zero/)
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
    let count = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if ((nums[i] & nums[j] & nums[k]) === 0) {
                    count++;
                }
            }
        }
    }
    return count;
};

const { expect } = require('chai');
it('982', () => {
    expect(countTriplets([2, 1, 3])).to.eq(12);
    expect(countTriplets([0, 0, 0])).to.eq(27);
});
