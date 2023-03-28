/**
 * [1638. 统计只差一个字符的子串数目](https://leetcode.cn/problems/count-substrings-that-differ-by-one-character/)
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
    let max = 0;
    for (let l = 1; l <= s.length; l++) {
        for (let i = 0; i <= s.length - l; i++) {
            for (let j = 0; j <= t.length - l; j++) {
                if (fun(s.slice(i, i + l), t.slice(j, j + l))) {
                    max++;
                }
            }
        }
    }
    return max;
};

let fun = function (a, b) {
    let n = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            n++;
        }
        if (n > 1) {
            return false;
        }
    }
    return n === 1;
};

const { expect } = require('chai');
it('0', () => {
    expect(countSubstrings('aba', 'baba')).to.eq(6);
});
