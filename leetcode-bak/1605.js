/**
 * [1605. 给定行和列的和求可行矩阵](https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums/)
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const m = rowSum.length;
    const n = colSum.length;
    const arr = new Array(m).fill(0).map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= arr[i][j];
            colSum[j] -= arr[i][j];
        }
    }
    return arr;
};

const { expect } = require('chai');
it('0', () => {
    expect(restoreMatrix([3, 8], [4, 7])).to.deep.eq([
        [3, 0],
        [1, 7],
    ]);
});
