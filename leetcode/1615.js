/**
 * [1615. 最大网络秩](https://leetcode.cn/problems/maximal-network-rank/)
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    const count = new Array(n).fill(0);
    const connect = new Array(n).fill(0).map(() => new Array(n).fill(false));
    for (let i = 0; i < roads.length; i++) {
        count[roads[i][0]]++;
        count[roads[i][1]]++;
        connect[roads[i][0]][roads[i][1]] = true;
        connect[roads[i][1]][roads[i][0]] = true;
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            const sum = count[i] + count[j] + (connect[i][j] ? -1 : 0);
            max = Math.max(max, sum);
        }
    }
    return max;
};

const { expect } = require('chai');
it('0', () => {
    expect(
        maximalNetworkRank(4, [
            [0, 1],
            [0, 3],
            [1, 2],
            [1, 3],
        ])
    ).to.eq(4);
});
