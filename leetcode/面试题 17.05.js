/**
 * [面试题 17.05.  字母与数字](https://leetcode.cn/problems/find-longest-subarray-lcci/)
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
    const n = array.length;

    // 数字为正, 字母为负
    const arr = array.map((i) => (/\d/.test(i) ? 1 : -1));
    for (let i = 1; i < n; i++) {
        arr[i] += arr[i - 1];
    }

    if (arr[n - 1] === 0) {
        return array;
    }

    for (let max = n; max > 0; max--) {
        if (max % 2 !== 0) continue;

        for (let l = 0; l <= n - max; l++) {
            if (arr[l + max - 1] - ~~arr[l - 1] === 0) {
                return array.slice(l, l + max);
            }
        }
    }
    return [];
};

const { expect } = require('chai');
it('0', () => {
    expect(
        findLongestSubarray([
            'A',
            '1',
            'B',
            'C',
            'D',
            '2',
            '3',
            '4',
            'E',
            '5',
            'F',
            'G',
            '6',
            '7',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
        ])
    ).to.deep.eq([
        'A',
        '1',
        'B',
        'C',
        'D',
        '2',
        '3',
        '4',
        'E',
        '5',
        'F',
        'G',
        '6',
        '7',
    ]);
    expect(findLongestSubarray(['A', 'A'])).to.deep.eq([]);
    expect(
        findLongestSubarray([
            '42',
            '10',
            'O',
            't',
            'y',
            'p',
            'g',
            'B',
            '96',
            'H',
            '5',
            'v',
            'P',
            '52',
            '25',
            '96',
            'b',
            'L',
            'Y',
            'z',
            'd',
            '52',
            '3',
            'v',
            '71',
            'J',
            'A',
            '0',
            'v',
            '51',
            'E',
            'k',
            'H',
            '96',
            '21',
            'W',
            '59',
            'I',
            'V',
            's',
            '59',
            'w',
            'X',
            '33',
            '29',
            'H',
            '32',
            '51',
            'f',
            'i',
            '58',
            '56',
            '66',
            '90',
            'F',
            '10',
            '93',
            '53',
            '85',
            '28',
            '78',
            'd',
            '67',
            '81',
            'T',
            'K',
            'S',
            'l',
            'L',
            'Z',
            'j',
            '5',
            'R',
            'b',
            '44',
            'R',
            'h',
            'B',
            '30',
            '63',
            'z',
            '75',
            '60',
            'm',
            '61',
            'a',
            '5',
            'S',
            'Z',
            'D',
            '2',
            'A',
            'W',
            'k',
            '84',
            '44',
            '96',
            '96',
            'y',
            'M',
        ])
    ).to.deep.eq([
        '52',
        '3',
        'v',
        '71',
        'J',
        'A',
        '0',
        'v',
        '51',
        'E',
        'k',
        'H',
        '96',
        '21',
        'W',
        '59',
        'I',
        'V',
        's',
        '59',
        'w',
        'X',
        '33',
        '29',
        'H',
        '32',
        '51',
        'f',
        'i',
        '58',
        '56',
        '66',
        '90',
        'F',
        '10',
        '93',
        '53',
        '85',
        '28',
        '78',
        'd',
        '67',
        '81',
        'T',
        'K',
        'S',
        'l',
        'L',
        'Z',
        'j',
        '5',
        'R',
        'b',
        '44',
        'R',
        'h',
        'B',
        '30',
        '63',
        'z',
        '75',
        '60',
        'm',
        '61',
        'a',
        '5',
    ]);
});
