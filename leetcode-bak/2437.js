/**
 * [2437. 有效时间的数目](https://leetcode.cn/problems/number-of-valid-clock-times/)
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    time = time.replace(':', '');
    let res = 1;
    if (time[0] == 2) {
        for (let i = 1; i < time.length; i++) {
            if (time[i] !== '?') {
                continue;
            }
            if (i === 1) {
                res *= 4;
            } else if (i === 2) {
                res *= 6;
            } else if (i === 3) {
                res *= 10;
            }
        }
        return res;
    }

    if (time[0] == 0 || time[0] == 1) {
        for (let i = 1; i < time.length; i++) {
            if (time[i] !== '?') {
                continue;
            }
            if (i === 1) {
                res *= 10;
            } else if (i === 2) {
                res *= 6;
            } else if (i === 3) {
                res *= 10;
            }
        }
        return res;
    }

    if (time[1] === '?') {
        res *= 24;
    } else if (+time[1] <= 3) {
        res *= 3;
    } else {
        res *= 2;
    }
    for (let i = 2; i < time.length; i++) {
        if (time[i] !== '?') {
            continue;
        }
        if (i == 2) {
            res *= 6;
        }
        if (i == 3) {
            res *= 10;
        }
    }
    return res;
};

const { expect } = require('chai');
it('0', () => {
    expect(countTime('?5:00')).to.eq(2);
    expect(countTime('0?:0?')).to.eq(100);
});
