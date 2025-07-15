/**
 * [1053. 交换一次的先前排列](https://leetcode.cn/problems/previous-permutation-with-one-swap/description/)
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
    const n = arr.length;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            let idx = i + 1;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[i] && arr[j] !== arr[idx]) {
                    idx = j;
                }
            }
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
            break;
        }
    }
    return arr;
};
console.log(prevPermOpt1([3, 2, 1]));

// const { expect } = require('chai');
// it('0', () => {
//     expect(prevPermOpt1([3, 2, 1])).to.deep.eq([3, 1, 2]);
// });
