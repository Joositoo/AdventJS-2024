/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    let maxLength = 0;
    let mark = "****";

    for (const name of names) {
        if (name.length > maxLength){
            maxLength = name.length
        }
    }

    for (let i = 0; i < maxLength; i++) {
        mark += "*"
    }

    console.log(mark);
    for (const name of names) {
        console.log("* " +name.padEnd(maxLength, " ")+ " *");
    }
    console.log(mark);

    return '*'
}


/*   -- PRUEBAS --   */
createFrame(['midu', 'madeval', 'educalvolpz'])

/*
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

createFrame(['midu'])

/*
********
* midu *
********
*/
createFrame(['a', 'bb', 'ccc'])

/*
*******
* a   *
* bb  *
* ccc *
*******
*/