/**
 * [1144. 递减元素使数组呈锯齿状](https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag/)
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
    const n = nums.length;
    let odd = new Array(n).fill(0);
    let even = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const v = nums[i];
        const l = nums[i - 1] || v - 1;
        const r = nums[i + 1] || v - 1;

        if (i % 2 === 0) {
            // 偶数索引大于相邻元素
            if (i > 0) {
                even[i - 1] = Math.max(l - v + 1, even[i - 1]);
            }
            if (i < n - 1) {
                even[i + 1] = Math.max(r - v + 1, even[i + 1]);
            }
        } else {
            // 奇数索引大于相邻元素
            if (i > 0) {
                odd[i - 1] = Math.max(l - v + 1, odd[i - 1]);
            }
            if (i < n - 1) {
                odd[i + 1] = Math.max(r - v + 1, odd[i + 1]);
            }
        }
    }

    return Math.min(
        even.reduce((sum, i) => (sum += i), 0),
        odd.reduce((sum, i) => (sum += i), 0)
    );
};

// console.log(movesToMakeZigzag([1, 2, 3])); // 2
// console.log(movesToMakeZigzag([9, 6, 1, 6, 2])); // 4
console.log(movesToMakeZigzag([7, 4, 8, 9, 7, 7, 5])); // 6
