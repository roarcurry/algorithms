/**
 * [1140. 石子游戏 II](https://leetcode.cn/problems/stone-game-ii/)
 * 知识点 [动态规划]
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    // dp[i][m] 第i堆在m条件下的先手最大值
    const dp = new Array(piles.length);
    for (let i = 0; i < piles.length; i++) {
        dp[i] = new Array(piles.length + 1).fill(0);
    }

    let sum = 0;
    // 递推顺序从后往前
    for (let i = piles.length - 1; i >= 0; i--) {
        sum += piles[i];
        for (let m = 1; m <= piles.length; m++) {
            // 一次取完
            if (i + 2 * m >= piles.length) {
                dp[i][m] = sum;
            } else {
                for (let x = 1; x <= 2 * m; x++) {
                    dp[i][m] = Math.max(
                        dp[i][m],
                        sum - dp[i + x][Math.max(m, x)]
                    );
                }
            }
        }
    }
    console.log(dp);
    return dp[0][1];
};

console.log(stoneGameII([2, 7, 9, 4, 4])); // 10
