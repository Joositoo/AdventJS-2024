/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    return grid.map((row, i) => {
        return row.map((_, j) => {
            let bombs = 0;

            for (let r = -1; r < 2; r++) {
                for (let c = -1; c < 2; c++) {
                    if (c === 0 && r === 0) continue;
                    const x = i + r
                    const y = j + c

                    if (grid[x] && grid[x][y]) bombs++;
                }
            }

            return bombs;
        })
    })

}


/*   -- PRUEBAS --   */
console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
    [true, false],
    [false, false]
]));
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
]));

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]