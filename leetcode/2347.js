/**
 * [2347. 最好的扑克手牌](https://leetcode.cn/problems/best-poker-hand/)
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    if (new Set(suits).size === 1) {
        return 'Flush';
    }

    const counts = new Array(13 + 1).fill(0);
    for (let i of ranks) {
        counts[i] += 1;
    }
    let str = '';
    for (let c of counts) {
        if (c >= 3) {
            str = 'Three of a Kind';
        }
        if (c >= 2) {
            str = str || 'Pair';
        }
    }
    return str || 'High Card';
};

console.log(bestHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'])); // "Flush"
console.log(bestHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'])); // "Three of a Kind"
console.log(bestHand([10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'])); // "Pair"
console.log(bestHand([13, 13, 13, 13, 3], ['d', 'b', 'c', 'a', 'a'])); // "Three of a Kind"
console.log(bestHand([12, 12, 12, 9, 9], ['b', 'd', 'a', 'c', 'b'])); // "Three of a Kind"
console.log(bestHand([2, 10, 7, 10, 7], ['a', 'b', 'a', 'd', 'b'])); // "Pair"
