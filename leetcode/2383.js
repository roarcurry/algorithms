/**
 * [2383. 赢得比赛需要的最少训练时长](https://leetcode.cn/problems/minimum-hours-of-training-to-win-a-competition/)
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
    initialEnergy,
    initialExperience,
    energy,
    experience
) {
    let a = 0;
    const energyCount = energy.reduce((count, i) => count + i, 0);
    if (initialEnergy <= energyCount) {
        a = energyCount - initialEnergy + 1;
    }

    let b = 0;
    experience.map((exp) => {
        if (initialExperience <= exp) {
            const increment = exp - initialExperience + 1;
            b += increment;
            initialExperience += increment;
        }
        initialExperience += exp;
    });
    return a + b;
};

const { expect } = require('chai');
it('2383', () => {
    expect(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])).to.eq(8);
    expect(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 50])).to.eq(51);
});
