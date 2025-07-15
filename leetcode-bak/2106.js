/**
 * [2106. 摘水果](https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps/)
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
    const n = fruits[fruits.length - 1][0];
    const arr = new Array(n + 1).fill(0);
    const preSum = new Array(n + 1).fill(0);
    fruits.map(([position, amount]) => {
        arr[position] = amount;
    });
    arr.forEach((value, index) => {
        preSum[index] = ~~preSum[index - 1] + value;
    });

    let max = 0;
    // 先往左走
    for (let left = 0; left <= k; left++) {
        let right = k - left * 2;
        if (right < 0) {
            right = 0;
        }
        const leftIdx = startPos - left < 0 ? 0 : startPos - left;
        const rightIdx = startPos + right > n ? n : startPos + right;
        if (leftIdx > rightIdx) {
            continue;
        }
        const count = preSum[rightIdx] - ~~preSum[leftIdx - 1];
        max = Math.max(max, count);
    }

    // 再往右走
    for (let right = 0; right <= k; right++) {
        let left = k - right * 2;
        if (left < 0) {
            left = 0;
        }
        const leftIdx = startPos - left < 0 ? 0 : startPos - left;
        const rightIdx = startPos + right > n ? n : startPos + right;
        if (leftIdx > rightIdx) {
            continue;
        }
        const count = preSum[rightIdx] - ~~preSum[leftIdx - 1];
        max = Math.max(max, count);
    }

    return max;
};

const { expect } = require('chai');
it('0', () => {
    expect(
        maxTotalFruits(
            [
                [2, 8],
                [6, 3],
                [8, 6],
            ],
            5,
            4
        )
    ).to.eq(9);

    expect(maxTotalFruits([[200000, 10000]], 200000, 0)).to.eq(10000);

    expect(
        maxTotalFruits(
            [
                [0, 7],
                [7, 4],
                [9, 10],
                [12, 6],
                [14, 8],
                [16, 5],
                [17, 8],
                [19, 4],
                [20, 1],
                [21, 3],
                [24, 3],
                [25, 3],
                [26, 1],
                [28, 10],
                [30, 9],
                [31, 6],
                [32, 1],
                [37, 5],
                [40, 9],
            ],
            21,
            30
        )
    ).to.eq(71);

    expect(maxTotalFruits([[0, 10000]], 200000, 0)).to.eq(0);
});
