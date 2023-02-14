/**
 * [1234. 替换子串得到平衡字符串](https://leetcode.cn/problems/replace-the-substring-for-balanced-string/)
 * @param {string} s
 * @return {number}
 * 滑动窗口
 */
var balancedString = function (s) {
    const map = { Q: 0, W: 0, E: 0, R: 0 };

    const avg = s.length / 4;
    // 滑动窗口左右边界 [left, right)
    let left = 0;
    let right = 0;
    let min = s.length;

    // 统计每个字符的个数
    for (i of s) {
        map[i]++;
    }

    // left 超过 right, 或者 right 超过 s.length 时结束
    while (left <= right && right <= s.length) {
        if (exceed(map, avg)) {
            // 移入窗口
            map[s[right]]--;
            right++;
            continue;
        }
        min = Math.min(min, right - left);
        // 移出窗口
        map[s[left]]++;
        left++;
    }
    return min;
};

/**
 * 检查是否存在某个字符的数量超过平均值, 如果超过说明超过的部分需要被替换掉
 * @param {object} map
 * @param {number} avg
 * @returns {boolean} true 超过, false 未超过
 */
function exceed(map, avg) {
    return Object.values(map).some((count) => count > avg);
}
