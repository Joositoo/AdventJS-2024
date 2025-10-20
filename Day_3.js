function organizeInventory(inventory) {
    let finalInventory = {};

    for (let item of inventory) {
        if (!finalInventory[item.category]) {
            finalInventory[item.category] = {
                [item.name]: item.quantity
            }
        }
        else {
            if (finalInventory[item.category][item.name]) {
                finalInventory[item.category][item.name] += item.quantity
            }
            else {
                finalInventory[item.category][item.name] = item.quantity
            }
        }
    }
    return finalInventory
}


/*   -- PRUEBAS --   */
const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventory)
/*
{
    toys: {
        doll: 5,
        car: 5
        },
        sports: {
        ball: 2,
        racket: 4
}
*/

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventory2)

/*
{
    education: {
        book: 15
    },
    art: {
        paint: 3
    }
}
 */