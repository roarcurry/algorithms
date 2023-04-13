/**
 * [1041. 困于环中的机器人](https://leetcode.cn/problems/robot-bounded-in-circle/)
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    let pos = [0, 0];
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let idx = 0;
    for (let i of instructions) {
        if (i === 'L') {
            idx = (idx - 1 + 4) % 4;
        } else if (i === 'R') {
            idx = (idx + 1 + 4) % 4;
        } else if (i === 'G') {
            pos[0] += dirs[idx][0];
            pos[1] += dirs[idx][1];
        }
    }

    return (!pos[0] && !pos[1]) || !!idx;
};

const { expect } = require('chai');
it('0', () => {
    expect(isRobotBounded('GGLLGG')).to.be.true;
    expect(isRobotBounded('GG')).to.be.false;
    expect(isRobotBounded('GL')).to.be.true;
});
