/**
 * [1263. 推箱子](https://leetcode.cn/problems/minimum-moves-to-move-a-box-to-their-target-location/)
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = new Array();
    const flag = new Array(m * n).fill(0).map((_) => new Array(m * n).fill(0));

    // 初始位置
    let s, b;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 'S') {
                s = [i, j];
            } else if (grid[i][j] === 'B') {
                b = [i, j];
            }
        }
    }
    queue.push([toOneDim(s[0], s[1], n), toOneDim(b[0], b[1], n), 0]);
    flag[toOneDim(s[0], s[1], n)][toOneDim(b[0], b[1], n)] = 1;

    let min = Infinity;
    while (queue.length) {
        let d = 0;
        [s, b, d] = queue.shift();
        const [si, sj] = toTwoDim(s, n);
        const [bi, bj] = toTwoDim(b, n);
        if (grid[bi][bj] === 'T') {
            min = Math.min(min, d);
        }

        // 上下左右
        let dirs = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
        ];
        dirs.map((dir) => {
            let res;
            res = move(si, sj, bi, bj, grid, flag, dir);
            if (res) {
                if (res[2] !== bi || res[3] !== bj) {
                    queue.push([
                        toOneDim(res[0], res[1], n),
                        toOneDim(res[2], res[3], n),
                        d + 1,
                    ]);
                } else {
                    queue.unshift([
                        toOneDim(res[0], res[1], n),
                        toOneDim(res[2], res[3], n),
                        d,
                    ]);
                }
            }
        });
    }
    return Number.isFinite(min) ? min : -1;
};

function move(si, sj, bi, bj, grid, flag, dir) {
    // const m = grid.length;
    const n = grid[0].length;
    si += dir[0];
    sj += dir[1];
    if (!grid[si] || !grid[si][sj] || grid[si][sj] === '#') {
        return null;
    }
    if (si === bi && sj === bj) {
        bi += dir[0];
        bj += dir[1];
    }
    if (!grid[bi] || !grid[bi][bj] || grid[bi][bj] === '#') {
        return null;
    }
    if (flag[toOneDim(si, sj, n)][toOneDim(bi, bj, n)]) {
        return null;
    }
    flag[toOneDim(si, sj, n)][toOneDim(bi, bj, n)] = 1;
    return [si, sj, bi, bj];
}

// 二维索引转一维索引
function toOneDim(i, j, n) {
    return i * n + j;
}

// 一维索引转二维索引
function toTwoDim(idx, n) {
    return [Math.floor(idx / n), idx % n];
}

const { expect } = require('chai');
it('0', () => {
    expect(
        minPushBox([
            ['#', '#', '#', '#', '#', '#'],
            ['#', 'T', '#', '#', '#', '#'],
            ['#', '.', '.', 'B', '.', '#'],
            ['#', '.', '#', '#', '.', '#'],
            ['#', '.', '.', '.', 'S', '#'],
            ['#', '#', '#', '#', '#', '#'],
        ])
    ).to.eq(3);

    expect(
        minPushBox([
            ['#', '#', '#', '#', '#', '#', '#', '#'],
            ['#', '#', '#', 'T', '#', 'S', '.', '#'],
            ['#', '#', '#', '.', '#', 'B', '.', '#'],
            ['#', '.', '.', '.', '.', '.', '.', '#'],
            ['#', '.', '.', '.', '#', '#', '#', '#'],
            ['#', '#', '#', '#', '#', '#', '#', '#'],
        ])
    ).to.eq(7);

    expect(
        minPushBox([
            ['.', '.', '#', '.', '.', '.', '.', '#'],
            ['.', 'B', '.', '.', '.', '.', '.', '#'],
            ['.', '.', 'S', '.', '.', '.', '.', '.'],
            ['.', '#', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'T', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '#'],
            ['.', '#', '.', '.', '.', '.', '.', '.'],
        ])
    ).to.eq(6);

    expect(
        minPushBox([
            ['T', '#', '#', '#', '#'],
            ['.', '#', '#', '#', '#'],
            ['.', '#', '.', '.', '.'],
            ['S', '.', 'B', '.', '.'],
            ['.', '.', '#', '.', '#'],
            ['.', '.', '.', '.', '#'],
        ])
    ).to.eq(5);
});
