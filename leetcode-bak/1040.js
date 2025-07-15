/**
 * [1040. 移动石子直到连续 II](https://leetcode.cn/problems/moving-stones-until-consecutive-ii/)
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function (stones) {
    stones.sort((a, b) => a - b);
    const n = stones.length;
    const max = Math.max(
        stones[n - 2] - stones[0] - (n - 2),
        stones[n - 1] - stones[1] - (n - 2)
    );

    let min = n;
    for (let i = 0, j = 0; i < n && j < n - 1; i++) {
        while (stones[j + 1] - stones[i] < n && j < n - 1) {
            j++;
        }
        if (stones[j] - stones[i] === n - 2 && j - i === n - 2) {
            min = Math.min(min, 2);
        } else {
            min = Math.min(min, n - 1 - (j - i));
        }
    }

    return [min, max];
};

const { expect } = require('chai');
it('0', () => {
    expect(numMovesStonesII([7, 4, 9])).to.deep.eq([1, 2]);
});
