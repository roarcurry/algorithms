/**
 * [1096. 花括号展开 II](https://leetcode.cn/problems/brace-expansion-ii/)
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
    const set = new Set();
    let queue = solve(expression);
    while (queue.length) {
        const exp = queue.shift();
        if (exp.indexOf('{') === -1) {
            set.add(exp);
            continue;
        }
        queue = queue.concat(solve(exp));
    }
    return Array.from(set).sort();
};

function solve(expression) {
    if (expression.indexOf('{') === -1) {
        return [expression];
    }
    let left = 0;
    let right = 0;
    for (let i = 0; expression[i] !== '}'; ) {
        if (expression[i] === '{') {
            left = i;
        }
        right = ++i;
    }
    return expression
        .slice(left + 1, right)
        .split(',')
        .map(
            (s) =>
                `${expression.slice(0, left)}${s}${expression.slice(right + 1)}`
        );
}

const { expect } = require('chai');
it('0', () => {
    expect(braceExpansionII('{a,b}{c,{d,e}}')).to.deep.eq([
        'ac',
        'ad',
        'ae',
        'bc',
        'bd',
        'be',
    ]);

    expect(braceExpansionII('{a{b,c}}{{d,e},f{g,h}}')).to.deep.eq([
        'abd',
        'abe',
        'abfg',
        'abfh',
        'acd',
        'ace',
        'acfg',
        'acfh',
    ]);
});
