/**
 * [0. 模板](https://leetcode.cn/xxx)
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    const m = l.length;
    let res = new Array(m).fill(true);
    for (let i = 0; i < m; i++) {
        if (l[i] === r[i]) {
            res[i] = false;
            continue;
        }

        if (l[i] + 1 === r[i]) {
            continue;
        }

        const arr = nums.slice(l[i], r[i] + 1);
        arr.sort((a, b) => a - b);
        for (j = 1; j < arr.length - 1; j++) {
            if (arr[j + 1] - arr[j] !== arr[j] - arr[j - 1]) {
                res[i] = false;
                break;
            }
        }
    }

    return res;
};

const { expect } = require('chai');
it('0', () => {
    expect(
        checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])
    ).to.deep.eq([true, false, true]);
    expect(
        checkArithmeticSubarrays(
            [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
            [1],
            [4]
        )
    ).to.deep.eq([true]);
});
