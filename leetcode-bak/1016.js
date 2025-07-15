/**
 * [1016. 子串能表示从 1 到 N 数字的二进制串](https://leetcode.cn/problems/binary-string-with-substrings-representing-1-to-n/)
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
    for (let i = 1; i <= n; i++) {
        const temp = i.toString(2);
        if (s.indexOf(temp) === -1) {
            return false;
        }
    }
    return true;
};

const { expect } = require('chai');
it('0', () => {
    expect(queryString('0110', 3)).to.be.true;
    expect(queryString('110101011011000011011111000000', 15)).to.be.false;
});
