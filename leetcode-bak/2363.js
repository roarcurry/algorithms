/**
 * [2363. 合并相似的物品](https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag/)
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    const map = new Map();
    const arr = items1.concat(items2);
    for (let i = 0; i < arr.length; i++) {
        const [value, weight] = arr[i];
        map.set(value, ~~map.get(value) + weight);
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
};

console.log(
    JSON.stringify(
        mergeSimilarItems(
            [
                [1, 1],
                [4, 5],
                [3, 8],
            ],
            [
                [3, 1],
                [1, 5],
            ]
        )
    )
); // [[1,6],[3,9],[4,5]]
