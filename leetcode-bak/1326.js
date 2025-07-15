/**
 * [1326. 灌溉花园的最少水龙头数目](https://leetcode.cn/problems/minimum-number-of-taps-to-open-to-water-a-garden/)
 * 知识点 [贪心算法](https://leetcode.cn/problems/minimum-number-of-taps-to-open-to-water-a-garden/solution/python3javacgotypescript-yi-ti-yi-jie-ta-hwfe/)
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
    const mostRightArr = new Array(n + 1).fill(0);
    for (let i = 0; i < ranges.length; i++) {
        const l = Math.max(i - ranges[i], 0);
        const r = Math.min(i + ranges[i], n);
        mostRightArr[l] = Math.max(mostRightArr[l], r);
    }

    let count = 0;
    // 起点
    let start = 0;
    // 最远右端点
    let mostRight = 0;
    for (let i = 0; i < n; i++) {
        mostRight = Math.max(mostRight, mostRightArr[i]);
        // 无法覆盖 [i, i+1]
        if (mostRight <= i) {
            return -1;
        }
        // 更新起点
        if (start === i) {
            count++;
            start = mostRight;
        }
    }
    return count;
};

console.log(minTaps(5, [3, 4, 1, 1, 0, 0])); // 1
console.log(minTaps(3, [0, 0, 0, 0])); // -1
