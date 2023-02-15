/**
 * [1124. 表现良好的最长时间段](https://leetcode.cn/problems/longest-well-performing-interval/)
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    const sum = preSum(hours.map((i) => (i > 8 ? 1 : -1)));
    let max = 0;
    for (let i = 0; i < sum.length; i++) {
        for (let j = i + 1; j < sum.length; j++) {
            if (sum[j] > sum[i]) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
};

/**
 * 前缀和
 * @param {*} arr
 * @returns
 */
function preSum(arr) {
    const sum = new Array(arr.length + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        sum[i + 1] = sum[i] + arr[i];
    }
    return sum;
}
