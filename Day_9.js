/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    let row;
    let column;
    let result;

    for (let i = 0; i < board.length; i++) {
        row = board[i].indexOf("@") != -1 ? i : null;
        column = board[i].indexOf("@") != -1 ? board[i].indexOf("@") : null;
        
        if (row != null && column != null){
            break;
        }
    }    

    switch(mov){
        case "U":
            row --;            
            break;
        case "D":
            row ++;
            break;
        case "L":
            column --;
            break;
        case "R":
            column ++;
            break;
    };

    switch (board[row].charAt(column)){
        case "*":
            result = "eat";
            break;
        case "o":
            result = "crash";
            break;
        case "·":
            result = "none";
            break;
        default: 
            result = "crash";
            break;
    }
    
    return result;
}


/*   -- PRUEBAS --   */
const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha