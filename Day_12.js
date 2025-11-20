/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    let ornamentList = new Map([
        ["*", 1],
        ["o", 5],
        ["^", 10],
        ["#", 50],
        ["@", 100]
    ]);

    let price = 0;

    for (let i = 0; i < ornaments.length; i++) {
        if (ornamentList.get(ornaments[i]) < ornamentList.get(ornaments[i + 1])){
            price -= ornamentList.get(ornaments[i]);
        }
        else{
            price += ornamentList.get(ornaments[i]);
        }
    }

    return price;
}


/*   -- PRUEBAS --   */
console.log(calculatePrice('***'));  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'));   // 4   (5 - 1)
console.log(calculatePrice('o*'));   // 6   (5 + 1)
console.log(calculatePrice('*o*'));  // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')); // 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***')); // 8   (5 + 3)
console.log(calculatePrice('*o@'));  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'));   // 49  (-1 + 50)
console.log(calculatePrice('@@@'));  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'));   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'));  // undefined (Z es desconocido)