/**
 * [2379. 得到 K 个黑块的最少涂色次数](https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let min = blocks.length;
    const arr = new Array(blocks.length);
    for (let i = 0; i < blocks.length; i++) {
        arr[i] = ~~arr[i - 1] + (blocks[i] === 'W' ? 1 : 0);
        if (i >= k - 1) {
            min = Math.min(min, arr[i] - ~~arr[i - k]);
        }
    }
    return min;
};

const { expect } = require('chai');
it('0', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).to.eq(3);
    expect(minimumRecolors('WBWBBBW', 2)).to.eq(0);
});
