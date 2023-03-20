/**
 * [2310. 个位数字为 K 的整数之和](https://leetcode.cn/problems/sum-of-numbers-with-units-digit-k/description/)
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function (num, k) {
    if (num === 0) {
        return 0;
    }

    for (let i = 1; i <= num; i++) {
        if (i * k > num) {
            break;
        }
        if ((num - i * k) % 10 === 0) {
            return i;
        }
    }
    return -1;
};

const { expect } = require('chai');
it('0', () => {
    expect(minimumNumbers(58, 9)).to.eq(2);
    expect(minimumNumbers(37, 2)).to.eq(-1);
    expect(minimumNumbers(0, 7)).to.eq(0);
    expect(minimumNumbers(1, 1)).to.eq(1);
    expect(minimumNumbers(10, 8)).to.eq(-1);
});
