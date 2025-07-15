/**
 * [2404. 出现最频繁的偶数元素](https://leetcode.cn/problems/most-frequent-even-element/)
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    const obj = {};
    for (let i of nums) {
        if (i % 2 === 0) {
            obj[i] = ~~obj[i] + 1;
        }
    }
    let max = -1;
    let count = 0;
    Object.entries(obj).map(([i, n]) => {
        if (count === n) {
            max = Math.min(max, +i);
        } else if (count < n) {
            max = +i;
            count = n;
        }
    });
    return max;
};

const { expect } = require('chai');
it('0', () => {
    expect(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])).to.eq(2);
});
