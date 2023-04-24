/**
 * [1163. 按字典序排在最后的子串](https://leetcode.cn/problems/last-substring-in-lexicographical-order/)
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
    const n = s.length;
    let idx = n - 1;
    for (let i = idx; i >= 0; i--) {
        if (s.slice(i) < s.slice(idx)) {
            continue;
        }
        idx = i;
    }
    return s.slice(idx);
};

const { expect } = require('chai');
it('0', () => {
    expect(lastSubstring('abab')).to.eq('bab');
    expect(lastSubstring('leetcode')).to.eq('tcode');
    expect(lastSubstring('cacacb')).to.eq('cb');
});
