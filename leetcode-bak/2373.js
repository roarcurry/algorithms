/**
 * [2373. 矩阵中的局部最大值](https://leetcode.cn/problems/largest-local-values-in-a-matrix/)
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    // 单调队列
    const n = grid.length;
    const row = new Array(n).fill(0).map(() => new Array(n - 2));
    // 遍历每一行、每 3 个元素中的最大值
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 2; j++) {
            row[i][j] = Math.max(grid[i][j], grid[i][j + 1], grid[i][j + 2]);
        }
    }

    const res = new Array(n - 2).fill(0).map(() => new Array(n - 2));
    // 遍历每一列、每 3 个元素中的最大值
    for (let j = 0; j < n - 2; j++) {
        for (let i = 0; i < n - 2; i++) {
            res[i][j] = Math.max(row[i][j], row[i + 1][j], row[i + 2][j]);
        }
    }
    return res;
};
