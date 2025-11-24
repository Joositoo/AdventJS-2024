/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            s = s.slice(0, i) + s.slice(i + 2);
            i = -1;
            continue;
        }
    }
    return s;
}


/*   -- PRUEBAS --   */
console.log(removeSnow('zxxzoz')); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')); // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')); // -> "a"
// No hay montículos repetidos