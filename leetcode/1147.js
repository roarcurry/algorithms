/**
 * [1147. 段式回文](https://leetcode.cn/problems/longest-chunked-palindrome-decomposition/)
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {
    let count = 0;
    while (text) {
        const n = text.length;
        for (let i = 1; i <= n; i++) {
            if (text.slice(0, i) === text.slice(-i)) {
                count += i === n ? 1 : 2;
                text = text.slice(i, -i);
                break;
            }
        }
    }
    return count;
};

const { expect } = require('chai');
it('0', () => {
    expect(longestDecomposition('ghiabcdefhelloadamhelloabcdefghi')).to.eq(7);
});
