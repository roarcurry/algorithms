/**
 * [1653. 使字符串平衡的最少删除次数](https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced/)
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    // 统计从左往右 b 的个数, 以及从右往左 a 的个数
    const leftB = [];
    const rightA = [];
    for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
        leftB[i] = ~~leftB[i - 1] + (s[i] === 'b' ? 1 : 0);
        rightA[j] = ~~rightA[j + 1] + (s[j] === 'a' ? 1 : 0);
    }

    // 寻找数组元素之间的点 i, 使 leftB[i-1] + rightA[i] 最小
    let min = s.length;
    for (let i = 0; i <= s.length; i++) {
        min = Math.min(min, ~~leftB[i - 1] + ~~rightA[i]);
    }
    return min;
};

const { expect } = require('chai');
it('0', () => {
    expect(minimumDeletions('aababbab')).to.eq(2);
    expect(minimumDeletions('bbaaaaabb')).to.eq(2);
    expect(minimumDeletions('ab')).to.eq(0);
    expect(minimumDeletions('a')).to.eq(0);
    expect(minimumDeletions('aaa')).to.eq(0);
    expect(minimumDeletions('b')).to.eq(0);
    expect(minimumDeletions('bbb')).to.eq(0);
});
