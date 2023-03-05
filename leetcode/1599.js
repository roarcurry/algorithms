/**
 * [1599. 经营摩天轮的最大利润](https://leetcode.cn/problems/maximum-profit-of-operating-a-centennial-wheel/)
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
    let count = 0;
    let profit = 0;
    let maxProfit = 0;
    let maxIndex = -1;

    let i = 0;
    while (i < customers.length || count !== 0) {
        count += ~~customers[i++];
        // 每一轮上车的人数
        const temp = Math.min(count, 4);
        count -= temp;
        // 计算当前轮的收益
        profit += boardingCost * temp - runningCost;
        // 最大化收益
        if (profit > maxProfit) {
            maxProfit = profit;
            maxIndex = i;
        }
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxIndex;
};

const { expect } = require('chai');
it('1599', () => {
    expect(minOperationsMaxProfit([8, 3], 5, 6)).to.eq(3);
    expect(minOperationsMaxProfit([10, 9, 6], 6, 4)).to.eq(7);
    expect(minOperationsMaxProfit([3, 4, 0, 5, 1], 1, 92)).to.eq(-1);
});
