/**
 * [面试题 05.02. 二进制数转字符串](https://leetcode.cn/problems/bianry-number-to-string-lcci/)
 * 知识点 - 一个数乘以 2, 即把二进制往左移一位
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
    let str = '0.';
    while (str.length < 32 && num !== 0) {
        num *= 2;
        str += Number(num);
        num -= Number(num);
    }

    return num !== 0 ? 'ERROR' : str;
};
