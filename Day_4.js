/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tree = "";
    let space = "_";

    for (let i = 0; i < height; i++) {
        tree +=space.repeat(height-(i+1))+ ornament.repeat((2*i) + 1) + space.repeat(height-(i+1))+ "\n";
    }

    tree += space.repeat((2*height-1) / 2)+ "#" +space.repeat((2*height-1) / 2)+ "\n";
    tree += space.repeat((2*height-1) / 2)+ "#" +space.repeat((2*height-1) / 2)+ "\n";

    return tree;
}


/*   -- PRUEBAS --   */
const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/