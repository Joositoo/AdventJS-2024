/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    let position = [0, 0];
    let registeredMoves = [];

    for (let i = 0; i < moves.length; i++) {
        let multiplier = 1;
        let move = moves[i];

        if (move === "*") {
            i++;
            multiplier = 2;
            move = moves[i];
        }
        else if (move === "!") {
            i++;
            let original = moves[i];
            if (original === "R") move = "L";
            else if (original === "L") move = "R";
            else if (original === "U") move = "D";
            else if (original === "D") move = "U";
        }
        else if (move === "?") {
            i++;
            let original = moves[i];

            if (registeredMoves.includes(original)) continue;

            move = original; 
        }

        switch (move) {
            case "R": position[0] += multiplier; registeredMoves.push("R"); break;
            case "L": position[0] -= multiplier; registeredMoves.push("L"); break;
            case "U": position[1] += multiplier; registeredMoves.push("U"); break;
            case "D": position[1] -= multiplier; registeredMoves.push("D"); break;
        }
    }

    return position[0] === 0 && position[1] === 0 ? true : position;
}


/*   -- PRUEBAS --   */
console.log(isRobotBack('R'));     // [1, 0]
console.log(isRobotBack('RL'));    // true
console.log(isRobotBack('RLUD'));  // true
console.log(isRobotBack('*RU'));   // [2, 1]
console.log(isRobotBack('R*U'));   // [1, 2]
console.log(isRobotBack('LLL!R')); // [-4, 0]
console.log(isRobotBack('R?R'));   // [1, 0]
console.log(isRobotBack('U?D'));   // true
console.log(isRobotBack('R!L'));   // [2,0]
console.log(isRobotBack('U!D'));   // [0,2]
console.log(isRobotBack('R?L'));   // true
console.log(isRobotBack('U?U'));   // [0,1]
console.log(isRobotBack('*U?U'));  // [0,2]
console.log(isRobotBack('U?D?U')); // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'