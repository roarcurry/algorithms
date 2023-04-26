/**
 * [2418. 按身高排序](https://leetcode.cn/problems/sort-the-people/)
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    return names
        .reduce((arr, name, i) => {
            arr.push([name, heights[i]]);
            return arr;
        }, [])
        .sort((a, b) => b[1] - a[1])
        .map((i) => i[0]);
};

const { expect } = require('chai');
it('0', () => {
    expect(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170])).to.deep.eq([
        'Mary',
        'Emma',
        'John',
    ]);
});
