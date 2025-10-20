/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    let maxLength = 0;
    let mark = '****';
    let frame = [];

    for (const name of names) {
        if (name.length > maxLength) {
            maxLength = name.length;
        }
    }

    for (let i = 0; i < maxLength; i++) {
        mark += '*';
    }

    frame.push(mark);
    for (const name of names) {
        frame.push('* ' + name.padEnd(maxLength, ' ') + ' *');
    }
    frame.push(mark);

    return frame.join('\n');
}


/*   -- PRUEBAS --   */
console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

/*
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

console.log(createFrame(['midu']))

/*
********
* midu *
********
*/
console.log(createFrame(['a', 'bb', 'ccc']))

/*
*******
* a   *
* bb  *
* ccc *
*******
*/