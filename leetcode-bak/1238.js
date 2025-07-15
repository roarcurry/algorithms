/**
 * [1238. 循环码排列](https://leetcode.cn/problems/circular-permutation-in-binary-representation/)
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
    // 计算从 0 开始的排列
    function getArr(n) {
        if (n === 1) {
            const arr = new Array(2 ** n);
            arr[0] = 0;
            arr[1] = 1;
            return arr;
        }
        const arr1 = getArr(n - 1);
        // n 每增加 1, 都将原数组 + 2 ** n-1, 再转置
        const arr2 = arr1.map((i) => i + (1 << (n - 1))).reverse();
        return arr1.concat(arr2);
    }

    const arr = getArr(n);
    const index = arr.findIndex((i) => i === start);

    return arr.slice(index).concat(arr.slice(0, index));
};

console.log(circularPermutation(2, 3)); // [3,2,0,1]
console.log(circularPermutation(3, 2)); // [2,6,7,5,4,0,1,3]
