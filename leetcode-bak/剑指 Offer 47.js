/**
 * [剑指 Offer 47. 礼物的最大价值](https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/)
 * f(i,j) = max[f(i,j−1), f(i−1,j)] + grid(i,j)
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    // m * n
    const m = grid.length;
    const n = grid[0].length;
    const arr = new Array(m + 1).fill(0).map((i) => new Array(n + 1));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            arr[i][j] =
                Math.max(~~arr[i - 1][j], ~~arr[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return arr[m][n];
};

const { expect } = require('chai');
it('0', () => {
    expect(
        maxValue([
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ])
    ).to.eq(12);
});
