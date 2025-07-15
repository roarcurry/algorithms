/**
 * [1250. 检查「好数组」](https://leetcode.cn/problems/check-if-it-is-a-good-array/)
 * 知识点 [裴蜀定理](https://baike.baidu.com/item/%E8%A3%B4%E8%9C%80%E5%AE%9A%E7%90%86/5186593)
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
    let g = nums[0];
    for (let i = 1; i < nums.length; i++) {
        g = gdc(g, nums[i]);
    }
    return g === 1;
};

/**
 * 求 a, b 的最大公约数
 */
function gdc(a, b) {
    while (a % b !== 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(isGoodArray([12, 5, 7, 23]));
console.log(isGoodArray([29, 6, 10]));
console.log(isGoodArray([3, 6]));
