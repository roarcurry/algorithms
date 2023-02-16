/**
 * [2341. 数组能形成多少数对](https://leetcode.cn/problems/maximum-number-of-pairs-in-array/)
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const map = {};
    for (let n of nums) {
        map[n] = (~~map[n] + 1) % 2;
    }
    const t = Object.values(map).filter((n) => n).length;
    return [(nums.length - t) / 2, t];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPairs([1, 1]));
console.log(numberOfPairs([0]));
