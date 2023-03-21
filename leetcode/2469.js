/**
 * [2469. 温度转换](https://leetcode.cn/problems/convert-the-temperature/)
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    return [celsius + 273.15, celsius * 1.8 + 32.0];
};

const { expect } = require('chai');
it('0', () => {
    expect(convertTemperature(1)).to.eq(1);
});
