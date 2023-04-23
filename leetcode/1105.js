/**
 * [1105. 填充书架](https://leetcode.cn/problems/filling-bookcase-shelves/)
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
    const n = books.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        let maxHeight = 0;
        let totalWidth = 0;
        for (let j = i; j >= 0; j--) {
            const [width, height] = books[j];
            totalWidth += width;
            if (totalWidth > shelfWidth) {
                break;
            }
            maxHeight = Math.max(height, maxHeight);
            dp[i + 1] = Math.min(dp[i + 1], dp[j] + maxHeight);
        }
    }
    return dp[n];
};

const { expect } = require('chai');
it('0', () => {
    expect(
        minHeightShelves(
            [
                [1, 1],
                [2, 3],
                [2, 3],
                [1, 1],
                [1, 1],
                [1, 1],
                [1, 2],
            ],
            4
        )
    ).to.eq(6);
});
