/**
 * [2409. 统计共同度过的日子数](https://leetcode.cn/problems/count-days-spent-together/)
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
    arriveAlice,
    leaveAlice,
    arriveBob,
    leaveBob
) {
    const a = getIndex(arriveAlice);
    const b = getIndex(leaveAlice);
    const c = getIndex(arriveBob);
    const d = getIndex(leaveBob);
    console.log(a, b, c, d);

    if (b < c || d < a) {
        return 0;
    }
    return Math.min(b, d) - Math.max(a, c) + 1;
};

function getIndex(date) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const [m, d] = date.split('-').map((i) => +i);
    return days.slice(0, m - 1).reduce((sum, i) => (sum += i), 0) + d;
}

const { expect } = require('chai');
it('0', () => {
    expect(countDaysTogether('08-15', '08-18', '08-16', '08-19')).to.eq(3);
    expect(countDaysTogether('09-01', '10-19', '06-19', '10-20')).to.eq(49);
});
