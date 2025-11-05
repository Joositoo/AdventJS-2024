/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    while (packages.includes("(")) {
        let packagesArray = packages.split("");
        let primerParentesis = null;
        let segundoParentesis = null;
        let sortedString = [];

        for (let i = 0; i < packagesArray.length; i++) {
            primerParentesis = packagesArray[i] == "(" ? i : primerParentesis;
            segundoParentesis = packagesArray[i] == ")" ? i : segundoParentesis;
        }


        for (let i = segundoParentesis - 1; i >= primerParentesis + 1; i--) {
            sortedString.push(packagesArray[i]);
        }

        let part1 = packages.slice(0, primerParentesis);
        let part2 = sortedString.join("");
        let part3 = packages.slice(segundoParentesis + 1);

        packages = part1 + part2 + part3;
    }

    return packages;
}


/*   -- PRUEBAS --   */
console.log(fixPackages('a(cb)de'));
// ➞ "abcde"

console.log(fixPackages('a(bc(def)g)h'));
// ➞ agcbfedh"

console.log(fixPackages('abc(def(gh)i)jk'));
// ➞ "abcifedhgjk"

console.log(fixPackages('a(b(c))e'));
// ➞ "abce"