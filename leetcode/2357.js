/**
 * 2357. 使数组中所有元素都等于零 https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts/
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    // 先将 0 过滤, 然后去重. 去重后的元素的个数即为最少操作数
    return new Set(nums.filter((i) => !!i)).size;
};

console.log(minimumOperations([1, 5, 0, 3, 5])); // 3
console.log(minimumOperations([1])); // 1
