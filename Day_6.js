/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let hasGift = false;

    for (var i = 0; i < box.length; i++) {
        for (var j = 0; j < box[i].length; j++) {
            if (box[i][0] == "#" && box[i][j] == "*" && box[i - 1][j - 1] == "#") {
                hasGift = true;
            }
        }
    }
    return hasGift;
}

console.log(inBox([
    "###",
    "#*#",
    "###"
])) // ➞ true

console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])) // ➞ true

console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
])) // ➞ false

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])) // ➞ false